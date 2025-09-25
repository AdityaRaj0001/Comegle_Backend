import { Router } from "express";

import { requireAuth } from "../middlewares/auth";
import { addCommunityToWaitlist } from "../controllers/communities.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { addCommunityToWaitListSchema } from "../schemas/communities.schema";


const router = Router();

router.post("/add", requireAuth, validateRequest(addCommunityToWaitListSchema), addCommunityToWaitlist);

export default router;
