import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, verifyRefreshToken, generateAccessToken } from "../utils/jwt";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader?.split(" ")[1];
  if (!accessToken) return res.status(401).json({ success: false, message: "No access token" });

  try {
    const decoded: any = verifyAccessToken(accessToken);
    (req as any).userId = decoded.userId;
    next();
  } catch (err) {
    // Try refresh token
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ success: false, message: "Session timed out" });
    }
    try {
      const decodedRefresh: any = verifyRefreshToken(refreshToken);
      const newAccessToken = generateAccessToken({ userId: decodedRefresh.userId });
      (req as any).userId = decodedRefresh.userId;
      (req as any).newAccessToken = newAccessToken;
      next(); // <-- Call next: let controller handle response with new token
    } catch (err) {
      return res.status(401).json({ success: false, message: "Session timed out" });
    }
  }
};