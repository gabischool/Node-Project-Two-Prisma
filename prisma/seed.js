import prisma from "../api/lib/index.js";

async function seed() {
  try {
    // Delete existing data
    // await prisma.author.deleteMany();
    // await prisma.book.deleteMany();
    // await prisma.bookstore.deleteMany();

    // // Reset auto-increment counters
    // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Author'`;
    // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Book'`;
    // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Bookstore'`;

    // Seed data for the Owner model
    await prisma.author.create({
      data: {
        name: "Abdirahman Abdisalan",
        email: "abdirahman@gmail.com",
      },
    });

      await prisma.author.create({
        data: {
          name: "Mohemed Omar  Abdi",
          email: "mohamed@gmail.com",
        },
      });

    await prisma.book.create({
      data: {
        authorId: 1,
        title: "hagaha nafta",
        price: 10,
        image:
          "https://www.facebook.com/photo?fbid=315090881195805&set=a.191846326853595",
      },
    });
    
    await prisma.book.create({
      data: {
        authorId: 2,
        title: "saxiib wangsan",
        price: 10,
        image:
          "https://www.facebook.com/photo/?fbid=242887338416160&set=a.191846316853596",
      },
    });

    await prisma.bookStore.create({
      data: {
        bookId: 1,
        name: "home book ",
        location: "Mogadisho - Somalia",
      },
    });
      await prisma.bookStore.create({
        data: {
          bookId: 2,
          name: "somali book ",
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