import { Request, Response } from "express";
import { prisma } from "../config/db";
import jwt from "jsonwebtoken";

export const saveUserOnboarding = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { fullName, username, avatarUrl, email, gender, age, collegeId } =
      req.body;

    if (
      !fullName ||
      !username ||
      !avatarUrl ||
      !email ||
      !gender ||
      !age ||
      !collegeId
    ) {
      res.status(400).json({
        success: false,
        message:
          "All fields (fullName, username, avatarUrl, email, gender, age, collegeId) are required",
        data: null,
      });
      return;
    }

    // check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      res.status(409).json({
        success: false,
        message: "Username already taken",
        data: null,
      });
      return;
    }

    // check if email already exists ( yeh hoga nhi actually kabhi )
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      res.status(400).json({
        success: false,
        message: "Email already registered",
        data: null,
      });
      return;
    }

    const college = await prisma.college.findUnique({
      where: { id: Number(collegeId) },
    });
    // validate collegeId exists  ( yeh hoga nhi actually kabhi )
    if (!college) {
      res.status(400).json({
        success: false,
        message: "Invalid collegeId. College not found.",
        data: null,
      });
      return;
    }

    // create user and link with college
    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        avatarUrl,
        email,
        gender,
        age: Number(age),
        collegeId: Number(collegeId),
      },
      include: { college: true },
      omit: { collegeId: true },
    });

    if (newUser) {
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
      });

      res.status(200).json({
        success: true,
        message: "User onboarded successfully",
        data: { token, user: newUser },
      });
      return;
    }
  } catch (err) {
    console.error("Save User Error:", err);
    res
      .status(500)
      .json({ success: false, message: "User onboarding failed", data: null });
  }
};
