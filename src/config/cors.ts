import cors from "cors";

export const corsOptions = cors({
  origin: ["https://comegle-frontend.vercel.app","https://www.comegle.live","https://comegle.live"], // whitelist dev + prod
  credentials: true,
});
