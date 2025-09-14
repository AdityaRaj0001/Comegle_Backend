import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validateRequest =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        data: result.error.flatten().fieldErrors,
      });
      return;
    }

    req.body = result.data; // ✅ parsed data
    next();
  };
