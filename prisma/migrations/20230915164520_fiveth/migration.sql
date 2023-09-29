/*
  Warnings:

  - You are about to drop the column `createdTime` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `BookStore` table. All the data in the column will be lost.
  - You are about to drop the column `createdTim` on the `BookStore` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `BookStore` table. All the data in the column will be lost.
  - Added the required column `name` to the `BookStore` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Author" ("email", "id", "name") SELECT "email", "id", "name" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE TABLE "new_Books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "BookName" TEXT NOT NULL,
    "BookstoreId" INTEGER NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Books_BookstoreId_fkey" FOREIGN KEY ("BookstoreId") REFERENCES "BookStore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Books" ("BookName", "BookstoreId", "id") SELECT "BookName", "BookstoreId", "id" FROM "Books";
DROP TABLE "Books";
ALTER TABLE "new_Books" RENAME TO "Books";
CREATE TABLE "new_BookStore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BookStore_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookStore" ("authorId", "id", "location") SELECT "authorId", "id", "location" FROM "BookStore";
DROP TABLE "BookStore";
ALTER TABLE "new_BookStore" RENAME TO "BookStore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
