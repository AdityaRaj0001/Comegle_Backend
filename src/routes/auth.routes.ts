import { Router } from "express";
import { googleAuth } from "../controllers/auth.controller";

const router = Router();

router.post("/google/verify", (req, res, next) => {
  next();
}, googleAuth);

export default router;
