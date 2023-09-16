/*
  Warnings:

  - You are about to drop the column `BookId` on the `Books` table. All the data in the column will be lost.
  - Added the required column `BookstoreId` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "BookName" TEXT NOT NULL,
    "BookstoreId" INTEGER NOT NULL,
    "createdTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Books_BookstoreId_fkey" FOREIGN KEY ("BookstoreId") REFERENCES "BookStore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Books" ("BookName", "createdTime", "id", "updatedTime") SELECT "BookName", "createdTime", "id", "updatedTime" FROM "Books";
DROP TABLE "Books";
ALTER TABLE "new_Books" RENAME TO "Books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
