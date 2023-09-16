import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get('/' , async (req, res) => {
    try{
        const bookstore = await prisma.bookstores.findMany();

        if(bookstore.length == 0){
            res.status(404).json({message : 'Bookstore not found'});
        }
        res.json({bookstore})
    }catch(error){
        console.log(object);
        res.status(500).json({error : error.message})
    }
})

router.get('/:id',  async (req,res) => {
    try {

        const {id} = req.params;
        const bookstore = await prisma.bookstores.findUnique({ 
            where : {
                id : Number(id),

            }
        })

        if(!bookstore){
            req.status(404).json({message : "Bookstore not found"})
        }
        res.json(bookstore)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})
router.post('/' , async (req,res) => {
    try {
        const {authorId , name , location} = req.body;
        const bookstore = await prisma.bookstores.create({
            data :{
                authorId,
                name,
                location,
            }
        })
        if(!bookstore){
            res.status(404).json({message : "Bookstore not found"})
        }

        res.json(bookstore)


    }catch(error){
        res.status(500).json({error : error.message})

    }
})
router.put('/:id' , async (req,res) => { 
    try{
        const {id} = req.params;
        const {authorId , name , location} = req.body;
        const bookstore = await prisma.bookstores.update({
            where : {
                id : Number(id),
            },
            data : {
                authorId,
                name,
                location,
            }
        })
        if(!bookstore){
            res.status(404).json({message : "Bookstore not found"})
        }
        res.json(bookstore)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})

router.delete('/:id' , async(req,res) =>{
    try{
        const {id} = req.params;
    const bookstore = await prisma.bookstores.delete({
        where : {
            id : Number(id),
        }
    })
    if(!bookstore){
        res.status(404).json({message : "Bookstore not found"})
    }
    res.json(bookstore)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})




export default router;