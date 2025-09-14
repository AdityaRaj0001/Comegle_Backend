import { Request, Response } from "express";
/**
 * POST /api/v1/auth/logout
 */
export const logout = (req: Request, res: Response): void => {
  clearRefreshCookie(res);
  res.json({ success: true, message: "Logged out" });
};

/* ----------------- Helpers ------------------ */

export const clearRefreshCookie = (res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "lax",
    path: "/",
  });
}
