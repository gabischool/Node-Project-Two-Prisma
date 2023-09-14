

import express from "express"
import prisma from "./lip/index.js"


const router = express.Router()


// all author

router.get("/"   , async(req,res) => {

       const book = await prisma.book.findMany()

       if(book.length === 0){
        res.status(401).json({mssege : "not found book"})
    
        return book


       }

    
})


router.get("/:id"   , async(req,res) => {


    const {id} = req.params.id
    const bookone = await prisma.book.findUnique({
        where: {
            id: Number(id),
        }
    })

   if(!owner) {

    res.status(401).json({mssege : "not found bookone"})
   }

   return bookone



 
})



// poste  


router.post("/create_post"   , async(req,res) => {


    const {id} = req.params.id
    const {name , email} = req.params
    const cretebook = await prisma.book.create({

        
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
    const eitedbook = await prisma.book.update({

        
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

    const deltet = await prisma.book.delete({

        
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