/*
  Warnings:

  - You are about to drop the column `message` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Application` table. All the data in the column will be lost.
  - Added the required column `experience` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "message",
DROP COLUMN "name",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "experience" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Сайт',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Новая',
ADD COLUMN     "students" TEXT,
ADD COLUMN     "telegram" BOOLEAN,
ADD COLUMN     "workplace" TEXT;
