import { Router } from "express";
import { checkSession } from "../controllers/user.controller";
import { saveUserDetails } from "../controllers/user.controller"
import { requireAuth } from "../middlewares/auth";
const router = Router();

router.get("/session", checkSession);
router.post("/save", requireAuth, saveUserDetails);

export default router;