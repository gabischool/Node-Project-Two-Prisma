import prisma from "../api/lib/index.js";

async function seed() {
  try {
    // Delete existing data
    await prisma.author.deleteMany();
    // await prisma.book.deleteMany();
    // await prisma.bookstore.deleteMany();

    // Reset auto-increment counters
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Author'`;

    // Seed data for the Owner model
    await prisma.author.create({
      data: {
        name: "miirshe",
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
