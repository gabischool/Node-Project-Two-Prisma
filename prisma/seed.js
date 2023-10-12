import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Delete existing data
    await prisma.books.deleteMany();
    await prisma.bookstore.deleteMany();
    await prisma.authors.deleteMany();

      // Reset auto-increment counters
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Books"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Bookstore"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Authors"`;
  

    

    // Seed data for the Authors model
    await prisma.authors.create({
      data: {
        name: 'Ahmed Wali',
        email: 'ahmed@gmail.com',
        book: 'The fairy tales',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.authors.create({
      data: {
        name: 'Abdirahman Yusuf',
        email: 'abdirahman@gmail.com',
        book: 'The last ship',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.authors.create({
      data: {
        name: 'Fartun Jamac',
        email: 'fartun@gmail.com',
        book: 'Think Big',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    

    // Seed data for the Bookstore model
    await prisma.bookstore.create({
      data: {
        name: 'Daarulxadith',
        location: 'Nairobi, Kenya',
        bookstoreId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookstore.create({
      data: {
        name: 'The great library',
        location: 'Minnesota',
        bookstoreId: 2,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookstore.create({
      data: {
        name: 'Madina Library',
        location: 'Saudi Arabia, SA',
        boostorekId: 3,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });


    
    // Seed data for the Books model
    await prisma.books.create({
      data: {
        Price: Ksh100,
        Title: 'The fairy tales',
        Author: 'Ahmed Wali',
        bookId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.books.create({
      data: {
        Price: Ksh300,
        Title: 'The last ship',
        Author: 'Abdirahman Yussuf',
        bookId: 2,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.books.create({
      data: {
        Price: Ksh200,
        Title: 'Think Big',
        Author: 'Fartun jamac',
        bookId: 3,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();