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
  

    // Seed data for the Owner model
    await prisma.authors.create({
      data: {
        name: 'Ahmed Wali',
        email: 'ahmed@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.authors.create({
      data: {
        name: 'Abdirahman Yusuf',
        email: 'abdirahman@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.authors.create({
      data: {
        name: 'Fartun Jamac',
        email: 'fartun@gmail.com',
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    // Seed data for the Restaurant model
    await prisma.bookstore.create({
      data: {
        name: 'Salama Restaurant',
        location: 'Saint Cloud, MN',
        ownerId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookstore.create({
      data: {
        name: 'Afro Deli',
        location: 'Minnesota',
        ownerId: 2,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.bookstore.create({
      data: {
        name: 'Pizza Hut',
        location: 'Saint Paul, MN',
        ownerId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    // Seed data for the Rating model
    await prisma.books.create({
      data: {
        rating: 5,
        restaurantId: 1,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.books.create({
      data: {
        rating: 4,
        restaurantId: 3,
        created: new Date('2022-03-30T00:00:00.000Z'),
        updated: new Date('2022-03-30T00:00:00.000Z'),
      },
    });

    await prisma.books.create({
      data: {
        rating: 3,
        restaurantId: 2,
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