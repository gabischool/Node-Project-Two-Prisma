import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.bookStore.deleteMany();
    await prisma.book.deleteMany();
    await prisma.author.deleteMany();

    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;

    await prisma.author.create({
      data: {
        name: "abdikani",
        email: "abdikanimoh",
      },
    });

    await prisma.author.create({
      data: {
        name: "duraan ali",
        email: "@devduraanali@gmail.com",
      },
    });

    await prisma.book.create({
      data: {
        authorId: 1,
        title: "Hp Monitor",
        price: 2,
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455487_sd.jpg;maxHeight=200;maxWidth=300",
      },
    });

    await prisma.book.create({
      data: {
        authorId: 2,
        title: "Dell monitor",
        price: 3,
        image: "",
      },
    });

    await prisma.bookStore.create({
      data: {
        bookId: 1,
        name: "Monitors",
        location: "Hargeisa",
      },
    });

    // await prisma.bookStore.create({
    //     data: {
    //         bookId: 2,
    //         name: "Bader Book Store",
    //         location: "Hargeysa - Somalia"
    //     }
    // })

    console.log("Seed is done!");
  } catch (error) {
    console.log("Error Seed", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
