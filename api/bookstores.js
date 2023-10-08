import express from 'express';
import { Prisma } from '@prisma/client';
// import conn from './lib/index.js';
import prisma from './lib/index.js';

const router = express.Router();

//Select All BookStores
router.get('/', async (req, res)=>{
    try{
        const bookstore = await prisma.bookstore.findMany();
        if(bookstore.length===0){
            return res.status(404).json({error:'No BookStores found.'});
        }else return res.json(bookstore);
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Select only One BookStore
router.get("/:id", async(req, res)=>{
    try{
        const { id } = req.params;
        const bookstore = await prisma.bookstore.findUnique({
        where:{
            id: Number(id),
        },   
        });
        if (!bookstore) {
            return res.status(404).json({error:'No BookStores found.'});
        }else return res.json(bookstore);
    } catch (error){
        res.status(500).json({error:error.message})
    }
});

//Post or Create new BookStore
router.post("/", async(req, res)=>{
    try{
        const { name, location } = req.body;
        const createBookStore = await prisma.bookstore.create({
            data:{
                name,
                location
            }
        })
        if(!createBookStore){
            return res.status(404).json({status:"Book Store Not Created"})
        }else return res.json({message:"New Book Store created successfully",createBookStore})
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Update The Book Store
router.put('/:id', async(req, res)=>{
    try{
        const { id } = req.params;
        const { name, location } = req.body;
        const updateBookStore = await prisma.bookstore.update({
            where:{
                id: Number( id )
            },
            data:{
                name,
                location
            }
        });
        if(!updateBookStore){
            return res.status(404).json({status:"Book Store Not Updated"})
        }else return res.json({message:"Book Store updated successfully",updateBookStore})
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Delete Book Store
router.delete("/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        const deleteBookStore = await prisma.bookstore.delete({
        where:{
            id:(Number(id))
        }
        });
    if(!deleteBookStore){
        return res.status(404).json({status:"Book Store Not Deleted"})
    }else return res.json({message:"Book Store Deleted successfully",deleteBookStore})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

export default router