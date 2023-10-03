
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {

 try {
    

        // Delete existing data
    await prisma.author.deleteMany()
    await prisma.book.deleteMany()
    // await prisma.bookStore.deleteMany()

    // reset autoincrement counters 

    await prisma.$executeRaw`delete from sqlite_sequence where name = "Author"`;
    await prisma.$executeRaw`delete from sqlite_sequence where name = "Book"`;
    // await prisma.$executeRaw`delete from sqlite_sequence where name = "BookStore"`;

    await prisma.author.create({
      data: {
        name: 'hassan warsame',
        email: 'hassanw@gmail.com',

        },  
    })


    await prisma.author.create({
      data: {
        name: 'mohamed abdi',
        email: 'mohameda@gmail.com',

        },})


        await prisma.author.create({  
           data: {
            name: 'abdullahi ali',
            email: 'abdullahia@gmail.com',

            },})

            await prisma.author.create({
              data: {
                name: 'fadumo mohamed',
                email: 'fadumom@gmail.com',
              },})

              await prisma.author.create({
                data: {
                  name: 'safiya mohamed',
                  email: 'safiyam@gmail.com',
                },})

                await prisma.author.create({
                  data: {
                    name: 'mohamed qadar',
                    email: 'mohamedq@gamil.com',
                  }
                
                })

                // create books

                await prisma.book.create({
                  data: {
                      authorId: 1,
                      title: "the art of war",
                      price: 10,
                      image: "https://images-na.ssl-images-amazon.com/images/I/51Q7QsIw5EL._SX331_BO1,204,203,200_.jpg",
                  },
              });
                



                                              
                    
                    console.log('sead data successfully')
            
              } catch (error) {
                  console.error(error)   
                  process.exit(1)
                }  finally {
                  await prisma.$disconnect()
                }}

    seed()




    






