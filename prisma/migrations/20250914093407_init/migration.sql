-- CreateTable
CREATE TABLE "public"."College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emailDomain" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "College_emailDomain_key" ON "public"."College"("emailDomain");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "public"."College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
