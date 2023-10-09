import express from 'express';
import prisma from './lib/index.js';

const router = express.Router();

//Get all authors router
router.get('/', async(req , res)=>{
    try{
        const authors = await prisma.author.findMany();
        if(authors.length===0){
            return res.status(404).json({error:'No authors found.'});
        }
        res.json(authors);
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Get One authors by ID router
router.get('/:id', async(req, res)=>{
    try{
        const { id } = req.params;
        const author = await prisma.author.findUnique({
        where:{
            id:(Number(id))
        },
    });
    if(!author){
        return res.status(404).json({ error: "Author Not Found"})
    }else return res.json(author)
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Post or Create New Author
router.post("/", async(req, res)=>{
    try{
        const { authorName } = req.body;
    const createAuthor = await prisma.author.create({
        data:{
            authorName
        }
    });
    if(!createAuthor){
        return res.status(404).json({status:"Author Not Created"})
    }else return res.json({message:"Author created successfully",createAuthor})
    } catch (error){
        res.status(500).json({error:error.message})
    }
});

//Update Authors
router.put("/:id", async(req, res)=>{
    try{
        const { id } = req.params;
        const { authorName } = req.body;
        const updateAuthor = await prisma.author.update({
            where:{
                id:(Number(id))
            },
            data:{
                authorName
            }
        });
        if(!updateAuthor){
            return res.status(404).json({status:"Author Not Found."})
        }else return res.json({message:"Author updated successfully",updateAuthor})
        
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Delete Author
router.delete("/:id", async(req, res)=>{
    try{
        const { id } = req.params;
        const deleteAuthor = await prisma.author.delete({
            where:{
                id:(Number(id))
            },
        });
        if(!deleteAuthor){
            return res.status(404).json({status:"Author Not Found."})
        }else return res.json({message:"Author Deleted successfully",deleteAuthor})
        
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

export default router;