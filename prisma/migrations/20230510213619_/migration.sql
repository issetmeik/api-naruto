/*
  Warnings:

  - Added the required column `images` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "images" TEXT NOT NULL,
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "bloodType" DROP NOT NULL,
ALTER COLUMN "occupation" DROP NOT NULL,
ALTER COLUMN "afiliation" DROP NOT NULL,
ALTER COLUMN "partner" DROP NOT NULL,
ALTER COLUMN "ninjaRank" DROP NOT NULL,
ALTER COLUMN "ninjaRegister" DROP NOT NULL;
