/*
  Warnings:

  - You are about to drop the column `afiliation` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `bloodType` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `ninjaRank` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `ninjaRegister` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `partner` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "afiliation",
DROP COLUMN "age",
DROP COLUMN "birthDate",
DROP COLUMN "bloodType",
DROP COLUMN "height",
DROP COLUMN "ninjaRank",
DROP COLUMN "ninjaRegister",
DROP COLUMN "occupation",
DROP COLUMN "partner",
DROP COLUMN "weight",
ALTER COLUMN "alive" DROP DEFAULT;
