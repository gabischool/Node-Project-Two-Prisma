
import express from "express"
import prisma from "./lip/index.js"


const router = express.Router()


// all author

router.get("/"   , async(req,res) => {

       const owners = await prisma.author.findMany()

       if(owners.length === 0){
        res.status(401).json({mssege : "not found owners"})
    
        return owners


       }

    
})


router.get("/:id"   , async(req,res) => {


    const {id} = req.params.id
    const owner = await prisma.author.findUnique({
        where: {
            id: Number(id),
        }
    })

   if(!owner) {

    res.status(401).json({mssege : "not found awner"})
   }

   return owner



 
})



// poste  


router.post("/create_post"   , async(req,res) => {


    const {id} = req.params.id
    const {name , email} = req.params
    const createAuthor = await prisma.author.create({

        
        where: {
            id: Number(id),
            
        }, 
        data : {
            name,
            email

        }
        
    })

   if(!createAuthor) {

    res.status(401).json({mssege : "not found awner"})
   }

   return createAuthor



 
})


router.put("/edit/:id"   , async(req,res) => {


    const {id} = req.params.id
    const {name , email} = req.params
    const eitedauthor = await prisma.author.update({

        
        where: {
            id: Number(id),
            
        }, 
        data : {
            name,
            email

        }
        
    })

   if(!eitedauthor) {

    res.status(401).json({mssege : "not found awner"})
   }

   return eitedauthor



})


router.delete("/edit:id"   , async(req,res) => {


    const {id} = req.params.id

    const deltet = await prisma.author.delete({

        
        where: {
            id: Number(id),
            
        }, 
     
    })

   if(!deltet) {

    res.status(401).json({mssege : "not found awner"})
   }

   return deltet



})






export default router