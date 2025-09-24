/*
  Warnings:

  - You are about to drop the column `college_email` on the `CollegeWaitlist` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `CollegeWaitlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email_domain]` on the table `CollegeWaitlist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_domain` to the `CollegeWaitlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requester_name` to the `CollegeWaitlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CollegeWaitlist" DROP COLUMN "college_email",
DROP COLUMN "full_name",
ADD COLUMN     "email_domain" TEXT NOT NULL,
ADD COLUMN     "requester_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CollegeWaitlist_email_domain_key" ON "public"."CollegeWaitlist"("email_domain");
