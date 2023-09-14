
import express from "express"
import prisma from "./lip/index.js"



const router = express.Router()


// all author

router.get("/"   , async(req,res) => {

       const bookstore = await prisma.bookStore.findMany()

       if(bookstore.length === 0){
        res.status(401).json({mssege : "not found bookstore"})
    
        return bookstore


       }

    
})


router.get("/:id"   , async(req,res) => {


    const {id} = req.params.id
    const bookone = await prisma.bookStore.findUnique({
        where: {
            id: Number(id),
        }
    })

   if(!bookone) {

    res.status(401).json({mssege : "not found bookone"})
   }

   return bookone



 
})



// poste  


router.post("/create_post"   , async(req,res) => {


    const {id} = req.params.id
    const {   bookId,
        name, 
        location,} = req.params
    const cretebook = await prisma.bookStore.create({

        
        where: {
            id: Number(id),
            
        }, 
        data : {
            bookId,
            name, 
            location,

        }
        
    })

   if(!cretebook) {

    res.status(401).json({mssege : "not found cretebook"})
   }

   return cretebook



 
})


router.put("/edit/:id"   , async(req,res) => {


    const {id} = req.params.id
    const {  authorId,
        title,
        price,
        image,l} = req.params
    const eitedbook = await prisma.bookStore.update({

        
        where: {
            id: Number(id),
            
        }, 
        data : {
            authorId,
                title,
                price,
                image,

        }
        
    })

   if(!eitedbook) {

    res.status(401).json({mssege : "not found eitedbook"})
   }

   return eitedbook



})


router.delete("/edit:id"   , async(req,res) => {


    const {id} = req.params.id

    const deltet = await prisma.bookStore.delete({

        
        where: {
            id: Number(id),
            
        }, 
     
    })

   if(!deltet) {

    res.status(401).json({mssege : "not found book"})
   }

   return deltet



})






export default router