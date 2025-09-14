import { Router } from "express";
import { checkSession } from "../controllers/user.controller";
const router = Router();

router.get("/session", checkSession);

export default router;