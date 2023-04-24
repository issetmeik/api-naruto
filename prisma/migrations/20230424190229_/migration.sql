/*
  Warnings:

  - You are about to drop the `Favorites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_claId_fkey";

-- DropTable
DROP TABLE "Favorites";

-- CreateTable
CREATE TABLE "Favorite" (
    "id" CHAR(36) NOT NULL,
    "userId" TEXT NOT NULL,
    "claId" TEXT,
    "characterId" TEXT,
    "type" "FavoriteTypes" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_claId_fkey" FOREIGN KEY ("claId") REFERENCES "Cla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
