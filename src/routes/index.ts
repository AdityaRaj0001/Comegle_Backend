import { Router } from "express";
import authRoutes from "./auth.routes";
import healthRoutes from "./health.routes";
import onboardingRoutes from "./onboarding.routes";

const router = Router();

router.use("/auth", authRoutes); // <-- Added here
router.use("/onboarding", onboardingRoutes);
router.use("/health", healthRoutes);

export default router;
