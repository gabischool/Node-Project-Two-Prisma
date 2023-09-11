import express from 'express'
import prisma from './lib/index.js';

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const store = await prisma.bookStore.findMany()
        if(store.length === 0){
            res.status(404).json(`sotore not found`)
        }
        res.json(store)
    }catch(err){
        res.status(500).json({message: "internal server error", err})
    }
})
router.get('/:id', async(req,res)=>{
    try{
        const { id } = req.params
        const store = await prisma.bookStore.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!store){
            res.status(404).json(`sotore not found`)
        }
        res.json(store)
    }catch(err){
        res.status(500).json({message: "internal server error", err})
    }
})

router.post('/', async(req,res)=>{
    try{
        const { storeId, name, location } = req.body;
        const store = await prisma.bookStore.create({
            data: {
                storeId,
                name,
                location
            }
        })
        if(!store){
            res.status(404).json(`sotore not created`)
        }
        res.json({message: `student added succesfully`, store})
    }catch(err){
        res.status(500).json({message: "internal server error", err})
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const { id } = req.params
        const { storeId, name, location } = req.body;
        const store = await prisma.bookStore.update({
            data: {
                storeId,
                name,
                location
            },
            where: {
                id: Number(id)
            }
        })
        if(!store){
            res.status(404).json(`sotore not updated`)
        }
        res.json({message: `student added succesfully`, store})
    }catch(err){
        res.status(500).json({message: "internal server error", err})
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        const store = await prisma.bookStore.delete({
            where: {
                id: Number(id)
            }
        })
        if(!store){
            res.status(404).json(`sotore not deleted`)
        }
        res.json({message: `student added succesfully`, store})
    }catch(err){
        res.status(500).json({message: "internal server error", err})
    }
})

export default router;