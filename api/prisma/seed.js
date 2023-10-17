import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
async function seed() {
    try {

        await prisma.user.deleteMany()
        await prisma.book.deleteMany()
        await prisma.$executeRaw `DELETE FROM sqlite_sequence WHERE name='user'`
        await prisma.$executeRaw `DELETE FROM sqlite_sequence WHERE name='book'`

    } catch (err) {
        console.log(err)
        process.exit(1)
    } finally {
        prisma.$disconnect
    }
}

seed();