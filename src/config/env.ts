import dotenv from "dotenv";
dotenv.config();

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "";
export const IMAGE_KIT_PRIVATE_KEY = process.env.IMAGE_KIT_PRIVATE_KEY || "";
export const IMAGE_KIT_PUBLIC_KEY = process.env.IMAGE_KIT_PUBLIC_KEY || "";
export const IMAGE_KIT_URL_ENDPOINT = process.env.IMAGE_KIT_URL_ENDPOINT || "";