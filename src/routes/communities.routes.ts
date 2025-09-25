import { Router } from "express";

import { requireAuth } from "../middlewares/auth";
import { addCommunityToWaitlist } from "../controllers/communities.controller";

const router = Router();

router.post("/add_community", requireAuth, addCommunityToWaitlist);

export default router;
