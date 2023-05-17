/*
  Warnings:

  - Made the column `alive` on table `Character` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "alive" SET NOT NULL,
ALTER COLUMN "alive" SET DEFAULT true;
