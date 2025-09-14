import cors from "cors";
import { CLIENT_URL } from "./env";

export const corsOptions = cors({
  origin: [CLIENT_URL, "https://comegle-client.vercel.app"], // whitelist dev + prod

});
