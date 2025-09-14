import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader?.split(" ")[1];
  if (!accessToken) return res.status(401).json({ success: false, message: "No access token" });

  try {
    const decoded: any = verifyAccessToken(accessToken);
    (req as any).userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};