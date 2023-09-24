import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Delete existing data
    await prisma.book.deleteMany();

    // Seed data for the Book model
    const booksData = [
      {
        bookstoreId: 1,
        authorId: 1,
        title: "Book 1 title",
        image: "Book 1 image",
        created: new Date("2022-03-30T00:00:00.000Z"),
        updated: new Date("2022-03-30T00:00:00.000Z"),
      },
      {
        bookstoreId: 2,
        authorId: 2,
        title: "Book 2 title",
        image: "Book 2 image",
        created: new Date("2022-03-30T00:00:00.000Z"),
        updated: new Date("2022-03-30T00:00:00.000Z"),
      },
      {
        bookstoreId: 3,
        authorId: 3,
        title: "Book 3 title",
        image: "Book 3 image",
        created: new Date("2022-03-30T00:00:00.000Z"),
        updated: new Date("2022-03-30T00:00:00.000Z"),
      },
      {
        bookstoreId: 4,
        authorId: 4,
        title: "Book 4 title",
        image: "Book 4 image",
        created: new Date("2022-03-30T00:00:00.000Z"),
        updated: new Date("2022-03-30T00:00:00.000Z"),
      },
      {
        bookstoreId: 5,
        authorId: 5,
        title: "Book 5 title",
        image: "Book 5 image",
        created: new Date("2022-03-30T00:00:00.000Z"),
        updated: new Date("2022-03-30T00:00:00.000Z"),
      },
    ];

    for (const bookData of booksData) {
      await prisma.book.create({
        data: bookData,
      });
    }

    console.log("Data seeded successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
