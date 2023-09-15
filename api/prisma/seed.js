import prisma from "../lib/index.js";

export const seed = async() => {
    try {

        await prisma.user.deleteMany();
        await prisma.blog.deleteMany();
        await prisma.book.deleteMany();

    } catch (error) {
        console.log(`error in a seed : ${error.message}`);
        process.exit(1);
    } finally {
        prisma.$disconnect();
    }
}

seed();