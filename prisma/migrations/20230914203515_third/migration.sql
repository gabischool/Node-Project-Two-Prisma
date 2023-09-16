/*
  Warnings:

  - You are about to drop the column `createdTime` on the `BookStore` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookStore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdTim" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BookStore_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookStore" ("Name", "authorId", "id", "location", "updatedTime") SELECT "Name", "authorId", "id", "location", "updatedTime" FROM "BookStore";
DROP TABLE "BookStore";
ALTER TABLE "new_BookStore" RENAME TO "BookStore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
