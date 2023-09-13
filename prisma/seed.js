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
                name: "abdiasiis halane"
            },
        });

        await prisma.author.create({
            data: {
                name: "duraan ali",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 1,
                title: "story telling",
                price: 10,
                image: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 2,
                title: "Rich Dad Poor Dad",
                price: 3,
                image: "https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 1,
                name: "iqra books",
                location: "hargaysa, Somalia",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 2,
                name: "iqra Books ",
                location: "nairobi, kenya"
            }
        })

        console.log("Seed is succesfull!")

    } catch (error) {
        console.log("Error Seeding data", error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

seed()