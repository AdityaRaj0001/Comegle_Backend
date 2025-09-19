import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export function generateAccessToken(payload: object) {
  // return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15seconds" });
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "2m" }); // 10 minutes
}
export function generateRefreshToken(payload: object) {
  // return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}
export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}
export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}