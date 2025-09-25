import { Request, Response } from "express";
import { prisma } from "../config/db";

/**
 * Controller to add a community to the waitlist for a user.
 * Uses userId from req (set by requireAuth) and returns new accessToken if present.
 */
export const addCommunityToWaitlist = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const newAccessToken = (req as any).newAccessToken;
    const { community_name } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized: User not found" });
    }
    if (!community_name || typeof community_name !== "string" || community_name.trim() === "") {
      return res.status(400).json({ success: false, message: "Community name is required" });
    }

    // Create the waitlist entry
    const waitlistEntry = await prisma.communityWaitlist.create({
      data: {
        community_name: community_name,
        user_id: userId,
        status: "PENDING",
      },
      include: {
        user: true,
      },
    });

    // Respond, including new access token if present
    if (newAccessToken) {
      return res.status(201).json({
        success: true,
        message: "Community waitlist request submitted successfully.",
        waitlistEntry,
        accessToken: newAccessToken,
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Community waitlist request submitted successfully.",
        waitlistEntry,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to add community to waitlist.",
    });
  }
};