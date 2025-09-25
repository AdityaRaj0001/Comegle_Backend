// src/schemas/collegeSchemas.ts
import { z } from "zod";

const blockedDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "protonmail.com",
  "icloud.com",
];

export const requestCollegeAccessSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(30, "Full name must be at most 30 characters"),
  college_name: z
    .string()
    .min(3, "College name must be at least 3 characters")
    .max(100, "College name must be at most 100 characters"),111111111
  college_email: z.email("Invalid email address").refine(
    (email) => {
      const domain = email.split("@")[1].toLowerCase();
      return !blockedDomains.includes(domain);
    },
    { message: "Please use your official college email address" }
  ),
});
