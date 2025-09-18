import { Request, Response } from "express";
import { prisma } from "../config/db";
import {
  verifyAccessToken,
  verifyRefreshToken,
  generateAccessToken,
} from "../utils/jwt";
import { clearRefreshCookie } from "./session.controller";

function getSocialLinks(socials?: { linked_in?: string; twitter?: string; instagram?: string }) {
  return {
    linked_in: socials?.linked_in || "",
    twitter: socials?.twitter || "",
    instagram: socials?.instagram || "",
  };
}

// Remove socials from user object and add socialLinks
function shapeUser(user: any) {
  if (!user) return null;
  const { socials, ...userWithoutSocials } = user;
  return {
    ...userWithoutSocials,
    socialLinks: getSocialLinks(socials),
  };
}

// SESSION CHECKER
export const checkSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : undefined;

    if (!accessToken) {
      res.status(403).json({ success: false, message: "Token Not Present" });
      return;
    }

    let userId: string | undefined;
    let effectiveAccessToken: string | undefined = accessToken;

    try {
      const decoded: any = verifyAccessToken(accessToken);
      userId = decoded.userId;
    } catch {
      const refreshToken = req.cookies?.refreshToken;
      if (!refreshToken) {
        res.status(403).json({ success: false, message: "Refresh Token Not Present" });
        return;
      }
      try {
        const decodedRefresh: any = verifyRefreshToken(refreshToken);
        userId = decodedRefresh.userId;
        effectiveAccessToken = generateAccessToken({ userId });
      } catch {
        clearRefreshCookie(res);
        res.status(403).json({ success: false, message: "Invalid Refresh Token" });
        return;
      }
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { college: true, socials: true },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.json({
      success: true,
      user: shapeUser(user),
      accessToken: effectiveAccessToken,
    });
  } catch (err) {
    console.error("Session error:", err);
    res.status(500).json({ success: false, message: "Something went wrong (session)" });
  }
};

// SAVE USER DETAILS
export const saveUserDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized: User not found" });
      return;
    }

    const {
      full_name,
      username,
      avatar_url,
      gender,
      country,
      bio,
      tags,
      socials,
    } = req.body;

    const updateData: any = {};
    if (full_name !== undefined) updateData.full_name = full_name;
    if (username !== undefined) updateData.username = username;
    if (avatar_url !== undefined) updateData.avatar_url = avatar_url;
    if (gender !== undefined) updateData.gender = gender;
    if (country !== undefined) updateData.country = country;
    if (bio !== undefined) updateData.bio = bio;
    if (tags !== undefined) updateData.tags = tags;

    // Always upsert socials, even if empty strings, so user can clear links
    if (socials !== undefined) {
      updateData.socials = {
        upsert: {
          update: {
            linked_in: socials.linked_in ?? "",
            twitter: socials.twitter ?? "",
            instagram: socials.instagram ?? "",
          },
          create: {
            linked_in: socials.linked_in ?? "",
            twitter: socials.twitter ?? "",
            instagram: socials.instagram ?? "",
          },
        },
      };
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      include: { college: true, socials: true },
    });

    res.json({ success: true, user: shapeUser(user) });
  } catch (err: any) {
    console.error("Save user details error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Could not save user details",
    });
  }
};