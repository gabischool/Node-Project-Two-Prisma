import prisma from '../api/lib/index.js'


async function seed(){

    try{
     await prisma.author.deleteMany()
     await prisma.book.deleteMany()
     await prisma.bookStore.deleteMany()

     await prisma.$executeRaw`DELETE FROM  sqlite_sequence where name  = "author"`
     await prisma.$executeRaw`DELETE FROM  sqlite_sequence where name  = "book"`
     await prisma.$executeRaw`DELETE FROM  sqlite_sequence where name  = "bookStore"`
     await prisma.author.create({
        data : {
            name : 'amir',
           
        }
    }) 
    // await prisma.author.create({
    //     data : {
    //         name : 'amir',
      
    //         created : new Date("2023-02-23"),
    //         updated : new Date("2023-02-23"),
    //     }
    // }) 
    // await prisma.bookStore.create({
    //     data : {
    //         name : 'Nolosha ',
    //         location : "Mogadisho Taleeh",
          
    //         created : new Date("2023-01-01"),
    //         updated : new Date("2023-01-01")
    //     }
    // }) 
    await prisma.bookStore.create({
        data : {
            name : 'isbadal',
            location : "Hargeisa",
           
            created : new Date("2023-01-01"),
            updated : new Date("2023-01-01")
        }
    }) 
  
    await prisma.book.create({
        data : {
            title :  'isbadal',
            bookStoreId : 1,
            authorId : 1,
            price:10,
            image:"image 1"
            
        }
    }) 
    // await prisma.books.create({
    //     data : {
    //         BookName :  'Nafteyday Gacalo',
    //         BookstoreId : 2,
    //         authorId : 2,

    //     }
    // }) 
        console.log("seed is done !")
       
    }catch(error){
        console.log(error)

    }
    finally{
        prisma.$disconnect()

    }
}


seed()