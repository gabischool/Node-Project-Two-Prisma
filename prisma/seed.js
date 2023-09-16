import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function seed(){
    try{

        await prisma.books.deleteMany()
        await prisma.Bookstores.deleteMany()
        await prisma.author.deleteMany()


        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Books'`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Bookstores'`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Author'`;

        await prisma.author.create({
            data : {
                name : 'Abdishakuur',
                email : "Abdishakur@gmail.com",
            }
        }) 
        await prisma.author.create({
            data : {
                name : 'Mohamed',
                email : "moha@gmail.com",
                created : new Date("2023-02-23"),
                updated : new Date("2023-02-23"),
            }
        }) 
        await prisma.Bookstores.create({
            data : {
                name : 'Dheef Books',
                location : "Mogadisho Taleeh",
                authorId : 1,
                created : new Date("2023-01-01"),
                updated : new Date("2023-01-01")
            }
        }) 
        await prisma.Bookstores.create({
            data : {
                name : 'Hargeisa Books',
                location : "Hargeisa",
                authorId : 2,
                created : new Date("2023-01-01"),
                updated : new Date("2023-01-01")
            }
        }) 
        await prisma.books.create({
            data : {
                BookName :  'Daljir',
                BookstoreId : 1,
                
            }
        }) 
        await prisma.books.create({
            data : {
                BookName :  'Nafteyday Gacalo',
                BookstoreId : 2,

            }
        }) 
        console.log("seed is done");
    }catch(error){
        console.error(error)
        process.exit(1)
    }finally{
        await prisma.$disconnect()
    }
}

seed();