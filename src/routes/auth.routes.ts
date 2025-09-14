import { logout } from './../controllers/session.controller';
import { Router } from "express";
import { googleAuth } from "../controllers/auth.controller";

const router = Router();

router.post("/google/verify", googleAuth);
router.post("/logout", logout);

export default router;