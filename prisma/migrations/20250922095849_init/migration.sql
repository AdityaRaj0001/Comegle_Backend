/*
  Warnings:

  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female', 'Other', 'PreferNotToSay');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "country" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tags" TEXT[],
DROP COLUMN "gender",
ADD COLUMN     "gender" "public"."Gender" NOT NULL;

-- CreateTable
CREATE TABLE "public"."UserSocials" (
    "id" TEXT NOT NULL,
    "linked_in" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSocials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSocials_user_id_key" ON "public"."UserSocials"("user_id");

-- AddForeignKey
ALTER TABLE "public"."UserSocials" ADD CONSTRAINT "UserSocials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
