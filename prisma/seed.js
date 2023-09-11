import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function seed(){
    try{

        await prisma.author.deleteMany()
        await prisma.book.deleteMany()
        await prisma.bookStore.deleteMany()

        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="author"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="book"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="bookStore"`;

        await prisma.author.create({
            data:{
                name: "Mohamed Ali",
                email: "Mohamed@gmail.com"
            }
        })

        await prisma.book.create({
            data:{
                authorId: 14,
                name: "Node Js CheateSheet"
            }
        })

        await prisma.bookStore.create({
            data:{
                storeId: 1,
                name: "Store One",
                location: "Bakaaro"
            }
        })


    }catch(error){
        console.log(error)
        process.exit(1)
    }finally{
        await prisma.$disconnect
    }
}

seed()