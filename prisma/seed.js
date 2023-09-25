import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


async function seed() {

    try{
        await prisma.bookStore.deleteMany()
        await prisma.book.deleteMany()
        await prisma.author.deleteMany()

          // Reset auto-increment counters
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
  

    // Seed data for the Owner model

    await prisma.author.create({
      data: {
        name: 'Ahmed Wali',
        email: 'ahmed@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.author.create({
      data: {
        name: 'Abdirahman Yusuf',
        email: 'abdirahman@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.author.create({
      data: {
        name: 'Fartun Jamac',
        email: 'fartun@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    // Seed data for the Book model
    await prisma.book.create({
      data: {
        name: 'Salama Book',
        authorId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.book.create({
      data: {
        name: 'Afro Deli',
        authorId: 2,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.book.create({
      data: {
        name: 'Pizza Hut',
        authorId: 3,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    // Seed data for the Rating model
    await prisma.bookStore.create({
      data: {
        location: "Beledweyne",
        bookId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookStore.create({
      data: {
        location: "Mogadishu",
        bookId: 3,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookStore.create({
      data: {
        location: "Jowhar",
        bookId: 2,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    console.log('Seed data created successfully.');
    }catch(err){
        console.error(err)
        process.exit(1)
    }finally{
        await prisma.$disconnect()
    }
}
seed();