import { Request, Response } from "express";
import { prisma } from "../config/db";
import {
  verifyAccessToken,
  verifyRefreshToken,
  generateAccessToken,
} from "../utils/jwt";

import { clearRefreshCookie } from "./session.controller";

export const checkSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : undefined;

    // CASE 1: No access token provided at all
    if (!accessToken) {
      res
        .status(403)
        .json({ success: false, message: "Token Not Present" });
      return;
    }

    let userId: number | undefined;
    let effectiveAccessToken: string | undefined = accessToken;

    // Try to verify access token
    try {
      const decoded: any = verifyAccessToken(accessToken);
      userId = decoded.userId;
      // access token is valid; we keep using it
    } catch {
      // Access token invalid/expired -> attempt refresh token path
      const refreshToken = req.cookies?.refreshToken;
      if (!refreshToken) {
        res
          .status(403)
          .json({ success: false, message: "Refresh Token Not Present" });
        return;
      }

      try {
        const decodedRefresh: any = verifyRefreshToken(refreshToken);
        userId = decodedRefresh.userId;
        // Issue a new access token
        effectiveAccessToken = generateAccessToken({ userId });
      } catch {
        // Invalid / expired refresh token
        clearRefreshCookie(res);
        res
          .status(403)
          .json({ success: false, message: "Invalid Refresh Token" });
        return;
  
      }
    }

    // Fetch user
    const user = await prisma.user.findUnique({ where: { id: userId ? String(userId) : undefined }, include: { college: true }, omit : {
      id: true, createdAt: true, updatedAt: true , college_id: true
    } });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.json({
      success: true,
      data: {
        user,
        accessToken: effectiveAccessToken,
      },
    });
  } catch (err) {
    console.error("Session error:", err);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong (session)" });
  }
};