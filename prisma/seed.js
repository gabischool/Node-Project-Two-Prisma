import {PrismaClient} from '@prisma/client'

const prisma =new PrismaClient()


async function seed(){
    try{
        await prisma.bookStore.deleteMany();
        await prisma.book.deleteMany();
        await prisma.author.deleteMany();

        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;


        await prisma.author.create({
            data: {
                name: "cabdijabaar cabdirahman",
              
            },
        });

        await prisma.author.create({
            data: {
                name: "هال الرود",
              
            },
        });
        await prisma.author.create({
            data: {
                name: "ديل كارنيجي",
              
            },
        });

        await prisma.book.create({
            data: {
                authorId: 1,
                title: "aabe qani aabe faqiir",
                price: 20,
                image: "https://cilmiye.com/aabe-qani-aabe-faqiir/",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 2,
                title: "mucjisatu sabaah",
                price: 3,
                image: "https://www.kotobati.com/book/%D9%83%D8%AA%D8%A7%D8%A8-%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD",
            },
        });
        await prisma.book.create({
            data: {
                authorId: 3,
                title: "fanu idaaratu waqti",
                price: 3,
                image: "https://foulabook.com/ar/book/%D9%81%D9%86-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%88%D9%82%D8%AA-pdf",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 1,
                name: "xareed street",
                location: "howlwadaag,Mogadishu",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 2,
                name: "Bader Book shop",
                location: "km4, Mogadishu"
            }
        })
        await prisma.bookStore.create({
            data: {
                bookId: 3,
                name: "midnimo book shop",
                location: "howlwadaag, Mogadishu"
            }
        })
console.log("seed is done");
    }catch (error){
        console.error(error)
        process.exit(1)
    } finally{
        await prisma.$disconnect()
    }
}

seed()