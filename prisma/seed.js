import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed(){
    
    
        try {
            //Deletes data in the database

            await prisma.book.deleteMany()
            await prisma.author.deleteMany()
            await prisma.bookstore.deleteMany()

            //Reset AutoIncrement Counters

            await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
            await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`
            await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Bookstore"`
            
            //Seed data for the Bookstore model
            await prisma.bookstore.create({
                data:{
                    name:"Mubaarak",
                    location:"Bakaaro"
                }
            });

            await prisma.bookstore.create({
                data:{
                    name:"Cadceed",
                    location:"KM4"
                }
            });

            await prisma.bookstore.create({
                data:{
                    name:"Fourteen",
                    location:"Suuqa Xoolaha"
                }
            });

            await prisma.bookstore.create({
                data:{
                    name:"Hubqaad",
                    location:"Hodan"
                }
            });
            // END BOOKSTORE MODEL

            //Seed data for the Author model
            await prisma.author.create({
                data:{
                    authorName:"Abdishakuur Hassan",
                    

                }
            });

            await prisma.author.create({
                data:{
                    authorName:"Abdirahmaan Hassan",
                }
            });

            await prisma.author.create({
                data:{
                    authorName:"Shakra Hassan",
                }
            });

            await prisma.author.create({
                data:{
                    authorName:"Lionel Messi",
                }
            });
            //END OF AUTHOR MODEL

            //Seed data for the Book model
            await prisma.book.create({
                data:{
                    title:"HTML",
                    authorId:1,
                    price:10.3,
                    bookStoreId:1,
                    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML&psig=AOvVaw2pnmYXFJRhUxDp_y03h7uE&ust=1696877927723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDJm6SX6IEDFQAAAAAdAAAAABAE"
                }
            });

            await prisma.book.create({
                data:{
                    title:"JAVA",
                    authorId:4,
                    price:15,
                    bookStoreId:3,
                    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML&psig=AOvVaw2pnmYXFJRhUxDp_y03h7uE&ust=1696877927723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDJm6SX6IEDFQAAAAAdAAAAABAE"
                }
            });

            await prisma.book.create({
                data:{
                    title:"GUUL SIDE",
                    authorId:2,
                    price:20.1,
                    bookStoreId:2,
                    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML&psig=AOvVaw2pnmYXFJRhUxDp_y03h7uE&ust=1696877927723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDJm6SX6IEDFQAAAAAdAAAAABAE"
                }
            });

            await prisma.book.create({
                data:{
                    title:"HAYAAN",
                    authorId:3,
                    price:6.5,
                    bookStoreId:4,
                    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML&psig=AOvVaw2pnmYXFJRhUxDp_y03h7uE&ust=1696877927723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDJm6SX6IEDFQAAAAAdAAAAABAE"
                }
            });
            
        } catch (error) {
            console.error(error)
            process.exit(1)
        } finally {
            await prisma.$disconnect();
        }
   
}

seed()