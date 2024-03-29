-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('CUSTOMER', 'ADMIN');

-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('MAN', 'WOMEN', 'UNDEFINED');

-- CreateEnum
CREATE TYPE "FavoriteTypes" AS ENUM ('character', 'cla');

-- CreateTable
CREATE TABLE "Subscriber" (
    "id" CHAR(36) NOT NULL,
    "name" CHAR(100) NOT NULL,
    "subscribedToChannel" CHAR(100) NOT NULL,
    "subscribeDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" CHAR(36) NOT NULL,
    "externalId" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "role" "UserRoleType" NOT NULL DEFAULT 'CUSTOMER',
    "birthDate" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cla" (
    "id" CHAR(36) NOT NULL,
    "externalId" TEXT NOT NULL,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Cla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" CHAR(36) NOT NULL,
    "externalId" TEXT NOT NULL,
    "claId" TEXT,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "gender" "GenderType" NOT NULL DEFAULT 'UNDEFINED',
    "alive" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "apiRequest" (
    "id" CHAR(36) NOT NULL,
    "method" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "requestBody" TEXT,
    "requestParams" TEXT,
    "requestQuery" TEXT,
    "requestHeaders" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "apiRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_externalId_key" ON "User"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cla_externalId_key" ON "Cla"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_externalId_key" ON "Character"("externalId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_claId_fkey" FOREIGN KEY ("claId") REFERENCES "Cla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_claId_fkey" FOREIGN KEY ("claId") REFERENCES "Cla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
