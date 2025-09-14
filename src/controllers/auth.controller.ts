import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/db";

import { verifyGoogleIdToken } from "../utils/google";

import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const googleAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { credential } = req.body;

    if (!credential) {
      res.status(400).json({
        success: false,
        message: "Credential required",
        data: null,
      });
      return;
    }

    // ✅ Verify Google Token using our util
    const payload = await verifyGoogleIdToken(credential);

    if (!payload || !payload.email) {
      res.status(400).json({
        success: false,
        message: "Invalid Google token",
        data: null,
      });
      return;
    }

    const { email, name, picture } = payload;

    // ✅ Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email },
      include: { college: true },
      omit: { createdAt: true, updatedAt: true },
    });

    if (user) {
      const payload = { userId: user.id };

      // Generate tokens
      const accessToken = generateAccessToken(payload);
      const refreshToken = generateRefreshToken(payload);

      // Set refresh token in httpOnly cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      // Send access token in body (do NOT send refresh token)
      res.status(200).json({
        success: true,
        message: "User already exists",
        data: { user, accessToken },
      });
      return;
    }

    // ✅ Check if college allowed
    const domain = email.split("@")[1];
    const college = await prisma.college.findUnique({
      where: { email_domain: domain },
    });

    if (!college) {
      res.status(403).json({
        success: false,
        message: "Your college is not allowed. Please request access.",
        data: {
          user: {
            email,
            full_name: name,
          },
        },
      });
      return;
    }

    // ✅ Return college info for onboarding
    res.status(200).json({
      success: true,
      message: "College allowed. Proceed with onboarding.",
      data: {
        user: {
          college: { id: college.id, name: college.name },
          email,
          full_name: name,
          avatar_url: picture,
        },
      },
    });
    return;
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(500).json({
      success: false,
      message: "Authentication failed",
      data: null,
    });
  }
};
