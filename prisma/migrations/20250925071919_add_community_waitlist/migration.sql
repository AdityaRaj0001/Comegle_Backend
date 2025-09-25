-- CreateTable
CREATE TABLE "public"."CommunityWaitlist" (
    "id" TEXT NOT NULL,
    "community_name" TEXT NOT NULL,
    "status" "public"."WaitlistStatus" NOT NULL DEFAULT 'PENDING',
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityWaitlist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CommunityWaitlist" ADD CONSTRAINT "CommunityWaitlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
