import prisma from "../api/lib/index.js";

async function seed() {
  try {
    // Delete existing data
    // await prisma.author.deleteMany();
    // await prisma.book.deleteMany();
    // await prisma.bookstore.deleteMany();

    // Reset auto-increment counters
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Author'`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Book'`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Bookstore'`;

    // Seed data for the Owner model
    await prisma.author.create({
      data: {
        name: "AlI Omar  Abdi",
        email: "alikey@gmail.com",
      },
    });

    await prisma.book.create({
      data: {
        authorId: 1,
        title: "NAFTAYDAAY GACALO!",
        price: 2,
        image:
          "https://www.facebook.com/photo?fbid=315090881195805&set=a.191846326853595",
      },
    });

    await prisma.bookStore.create({
      data: {
        bookId: 1,
        name: "Barakad Market",
        location: "Mogadisho - Somalia",
      },
    });

    console.log("Seed data created successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
