import { Router } from "express";
import { saveUserOnboarding } from "../controllers/onboarding.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { saveUserSchema } from "../schemas/onboarding.schema";

const router = Router();

router.post("/save", validateRequest(saveUserSchema), saveUserOnboarding);

export default router;
