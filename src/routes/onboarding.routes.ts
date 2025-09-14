import { Router } from "express";
import { saveUserOnboarding } from "../controllers/onboarding.controller";

const router = Router();

router.post("/save", saveUserOnboarding); // STEP 2 if successfully authenticated and user is a new comer.

export default router;
