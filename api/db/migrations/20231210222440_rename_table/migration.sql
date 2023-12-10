/*
  Warnings:

  - You are about to drop the `UserStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_userId_fkey";

-- DropTable
DROP TABLE "UserStatus";

-- CreateTable
CREATE TABLE "Invite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
