import express from 'express'
import prisma from './lib/index.js'
const router = express.Router()

router.get('/', async(req,res)=>{
    try{
        const books = await prisma.book.findMany()
        if(books.length === 0){
            res.status(404).json({message: `can not found books`})
        }
        res.json(books)
    }catch(err){
        res.status(500).json(`error: ${err}`)
    }
})
router.get('/:id', async(req,res)=>{
    try{
        const book = await prisma.book.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        if(!book){
            res.status(404).json({message: `can not found book`})
        }
        res.json(book)
    }catch(err){
        res.status(500).json(`error: ${err}`)
    }
})

router.post('/', async (req,res)=>{
    try{
        const { authorId, name } = req.body

        const book = await prisma.book.create({
            data: {
                authorId,
                name
            }
        })
        if(!book){
            res.status(404).json({message: `can not create book`})
        }
        res.json({message: `book created succesfully`, book})
    }catch(err){
        res.status(500).json(`error: ${err}`)
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const { id } = req.params
        const { authorId, name } = req.body

        const book = await prisma.book.update({
            data: {
                authorId,
                name
            },
            where: {
                id: Number(id)
            }           
        })
        if(!book){
            res.status(404).json({message: `can not updated book`})
        }
        res.json({message: `book updated succesfully`, book})
    }catch(err){
        res.status(500).json(`error: ${err}`)
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        const book = await prisma.book.delete({
            where: {
                id: Number(id)
            }
        })
        if(!book){
            res.status(404).json({message: `can not deleted book`})
        }
        res.json({message: `book deleted successfulyy`, book})
    }catch(err){
        res.status(500).json(`error: ${err}`)
    }
})


export default router