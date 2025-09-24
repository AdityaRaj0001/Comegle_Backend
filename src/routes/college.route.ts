import { Router } from "express";
import {
  createCollegeAccessRequest,
  listCollegeRequests,
} from "../controllers/college.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { requestCollegeAccessSchema } from "../schemas/requestCollegeAccess.schema";

const router = Router();

// POST /api/college-request
router.post(
  "/request",
  validateRequest(requestCollegeAccessSchema),
  createCollegeAccessRequest
);

// GET /api/college-request
router.get("/request", listCollegeRequests);

export default router;
