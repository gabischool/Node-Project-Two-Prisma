import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    try {

                // Delete existing data
                // await prisma.book.deleteMany();
                // await prisma.bookstore.deleteMany();
                // await prisma.author.deleteMany();
        
                  // Reset auto-increment counters
                //   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
                //   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Bookstore"`;
                //   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
        
        // Seed data for the Author model
        await prisma.author.create({
            data : {
                name: "robert kiyosaki",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.author.create({
            data : {
                name: "Ustad Duran Ali",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.author.create({
            data : {
                name: "Salmo Mohamed Abdi",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });
        
        // Seed data for the Bookstore model
        await prisma.bookstore.create({
            data : {
                name: "Barakat books",
                location: "talex street",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.bookstore.create({
            data : {
                name: "Caways books",
                location: "kaxda",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.bookstore.create({
            data : {
                name: "Akmal books",
                location: "mogadisho mall",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        // Seed data for the Books model (HALKAN AYAAN BERI KA BILAABAA i.a)
        await prisma.book.create({
            data : {
                authorId : 1,
                bookstoreId : 1,
                title: "Rich Dad Poor Dad",
                price: 4.5,
                image : "https://img.thriftbooks.com/api/images/i/m/1B1606CC823A72CCEAF6AB4D49F18E9E368493EE.jpg",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.book.create({
            data : {
                authorId : 2,
                bookstoreId : 2,
                title: "Think and Grow Rich",
                price: 5.99,
                image : "https://images.squarespace-cdn.com/content/v1/5998a4141e5b6cc138c7e9cf/1608484664254-NG9OJLHCSWTIXUJSAFTF/IMG_4235.JPG",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });

        await prisma.book.create({
            data : {
                authorId : 3,
                bookstoreId : 3,
                title: "Deep work",
                price: 5.99,
                image : "https://images.squarespace-cdn.com/content/v1/5998a4141e5b6cc138c7e9cf/1608484664254-NG9OJLHCSWTIXUJSAFTF/IMG_4235.JPG",
                created: new Date('2023-03-30T00:00:00.000Z'),
                updated: new Date('2023-03-30T00:00:00.000Z'),
            }
        });



    } catch (error) {
        console.error(error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}



seed();