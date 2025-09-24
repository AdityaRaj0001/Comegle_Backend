import { Request, Response } from "express";
import { prisma } from "../config/db";

export const createCollegeAccessRequest = async (
  req: Request,
  res: Response
) => {
  try {
    const { full_name, college_name, college_email } = req.body;

    const email_domain = college_email.split("@")[1].toLowerCase();

    // Check for existing request with the same email domain
    const existing = await prisma.collegeWaitlist.findUnique({
      where: { email_domain },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "A request with this college email already exists",
        data: null,
      });
    }

    const newRequest = await prisma.collegeWaitlist.create({
      data: { requester_name: full_name, college_name, email_domain },
    });

    res.json({
      success: true,
      message: "College request submitted successfully",
      data: newRequest,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to submit college request",
      data: null,
    });
  }
};

export const listCollegeRequests = async (req: Request, res: Response) => {
  try {
    const requests = await prisma.collegeWaitlist.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json({
      success: true,
      message: "College requests fetched successfully",
      data: requests,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch college requests",
      data: null,
    });
  }
};
