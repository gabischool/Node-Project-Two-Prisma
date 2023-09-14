import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



async function seed(){


  try {

    await prisma.author.create({
        data : {
            name : "xaaancde",
            email :"faarx@gmail.com"
        }
    })


    await prisma.book.create({
        data : {
            authorId : 1,
            title  : "soomali",
            price : 3,
            image : "https://adeeg.com/cdn/shop/products/Haldoor_2048x.png?v=1658815548"


        }
    })


    await prisma.bookStore.create({
        data : {
            name : "loves",
            location  : "qardho",
            bookId : 1,
      


        }
    })





  }  catch(error){
    console.log(error)
    process.exit(1)
    } finally {
        await prisma.$disconnect()
    }


}

seed()