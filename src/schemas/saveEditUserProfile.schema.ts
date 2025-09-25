import { z } from "zod";

export const saveEditUserProfileSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(30, "Full name must be at most 30 characters")
    .optional(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must contain only letters, numbers, or underscores",
    })
    .optional(),
  avatar_url: z.string().url("Invalid avatar URL").optional(),
  gender: z
    .enum(["MALE", "FEMALE", "OTHER", "PREFER_NOT_TO_SAY"], {
      message: "Gender must be one of the allowed values",
    })
    .optional(),
  country: z.string().max(50, "Country name too long").optional(),
  bio: z.string().max(200, "Bio too long").optional(),
  tags: z
    .array(z.string().min(1, "Tag cannot be empty"))
    .max(10, "Max 10 tags allowed")
    .optional(),
  socials: z
    .object({
      linked_in: z
        .url("Invalid LinkedIn URL")
        .or(z.literal(""))
        .optional(),
      twitter: z
        .url("Invalid Twitter URL")
        .or(z.literal(""))
        .optional(),
      instagram: z
        .url("Invalid Instagram URL")
        .or(z.literal(""))
        .optional(),
    })
    .optional(),
});
