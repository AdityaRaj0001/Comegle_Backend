import { Router } from "express";
import authRoutes from "./auth.routes";
import healthRoutes from "./health.routes";
import onboardingRoutes from "./onboarding.routes";
import userRoutes from "./user.routes";
const router = Router();

router.use("/auth", authRoutes); // <-- Added here
router.use("/onboarding", onboardingRoutes);
router.use("/health", healthRoutes);
router.use("/user", userRoutes); // <-- Added here

export default router;
