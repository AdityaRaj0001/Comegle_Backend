import { Request, Response } from "express";
import { prisma } from "../config/db";
import jwt from "jsonwebtoken";

import { generateAccessToken,generateRefreshToken } from "../utils/jwt";

export const saveUserOnboarding = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { full_name, username, avatar_url, email, gender, age, college_id } =
      req.body;

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
      where: { id: college_id },
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
        full_name,
        username,
        avatar_url,
        email,
        gender,
        age: Number(age),
        college_id: college_id,
      },
      include: { college: true },
      omit: { college_id: true, createdAt: true, updatedAt: true },
    });

    if (newUser) {
     
      const accessToken = generateAccessToken({ userId: newUser.id });
      const refreshToken = generateRefreshToken({ userId: newUser.id });
      // set the refresh token as cookie
res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "development",
  sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
});

// send access token in response
res.status(201).json({
  success: true,
  message: "Onboarding complete.",
  data: { user: newUser, accessToken },
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
