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
                name: "Yaasiin Ahmed",
                email: "yaskassoy@gmail.com"
            },
        });

        await prisma.author.create({
            data: {
                name: "Mohamed Abdi",
                email: "mohamed@gmail.so",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 1,
                title: "Haldoor",
                price: 2,
                image: "https://adeeg.com/cdn/shop/products/Haldoor_2048x.png?v=1658815548",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 2,
                title: "Farxad kunooloow",
                price: 3,
                image: "https://adeeg.com/cdn/shop/products/Farxadkunooloow_280x.png?v=1658815400",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 1,
                name: "Hayat Market",
                location: "Mogadisho - Somalia",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 2,
                name: "Bader Book Store",
                location: "Hargeysa - Somalia"
            }
        })

        console.log("Seed is done!")

    } catch (error) {
        console.log("Error Seed", error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

seed()