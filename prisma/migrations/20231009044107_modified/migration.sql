/*
  Warnings:

  - You are about to drop the column `bookName` on the `Bookstore` table. All the data in the column will be lost.
  - Added the required column `name` to the `Bookstore` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookstore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Bookstore" ("created", "id", "location", "updated") SELECT "created", "id", "location", "updated" FROM "Bookstore";
DROP TABLE "Bookstore";
ALTER TABLE "new_Bookstore" RENAME TO "Bookstore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
