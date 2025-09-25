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
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: User not found" });
    }
    if (
      !community_name ||
      typeof community_name !== "string" ||
      community_name.trim() === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Community name is required" });
    }

    // Check if this community_name is already present in the waitlist
    const existingCommunity = await prisma.communityWaitlist.findFirst({
      where: { community_name: community_name },
    });

    if (existingCommunity) {
      return res.status(409).json({
        success: false,
        message: "This community is already in waitlist.",
      });
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

    // Shape user object to include only required fields
    const shapedUser = waitlistEntry.user
      ? {
          full_name: waitlistEntry.user.full_name,
          username: waitlistEntry.user.username,
          email: waitlistEntry.user.email,
        }
      : null;

    const { user_id, user, ...waitlistEntryRest } = waitlistEntry;

    // Respond, including new access token if present
    if (newAccessToken) {
      return res.status(201).json({
        success: true,
        message: "Community waitlist request submitted successfully.",
        waitlistEntry: {
          ...waitlistEntryRest,
          user: shapedUser,
        },
        accessToken: newAccessToken,
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Community waitlist request submitted successfully.",
        waitlistEntry: {
          ...waitlistEntryRest,
          user: shapedUser,
        },
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to add community to waitlist.",
    });
  }
};
