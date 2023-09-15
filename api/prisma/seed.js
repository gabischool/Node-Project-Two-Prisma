import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    try {

        await prisma.user.deleteMany()
        await prisma.book.deleteMany()

        // await prisma.$executeRaw `DELETE FROM mysql_sequence WHERE name = "user"`
        // await prisma.$executeRaw `DELETE FROM mysql_sequence WHERE name = "book"`

        await prisma.$queryRaw `ALTER TABLE user AUTO_INCREMENT = 1`;
        await prisma.$queryRaw `ALTER TABLE book AUTO_INCREMENT = 1`;

        await prisma.user.create({
            data: {
                username: 'miirshe',
                email: 'miirshe@gmail.com',
                password: '12345'
            }
        })

    } catch (error) {
        console.log(`Seed Not Found ${error}`);
        process.exit(1);
    } finally {
        prisma.$disconnect();
    }
}

seed();