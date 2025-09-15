import cors from "cors";
import { CLIENT_URL } from "./env";

export const corsOptions = cors({
  origin: [
    CLIENT_URL,
    "https://comegle-frontend.vercel.app",
    "https://www.comegle.live",
    "https://comegle.live",
  ], // whitelist dev + prod
  credentials: true,
});
