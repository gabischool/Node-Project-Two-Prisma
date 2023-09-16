import express  from 'express';
import prisma from './lib/index.js';

const router = express.Router();


router.get('/' , async (req, res) => {
    try{
        const book = await prisma.books.findMany();

        if(book.length == 0){
            res.status(404).json({message : 'book not found'});
        }
        res.json({book})
    }catch(error){
        res.status(500).json({error : error.message})
    }
})

router.get('/:id',  async (req,res) => {
    try {

        const {id} = req.params;
        const book = await prisma.book.findUnique({ 
            where : {
                id : Number(id),

            }
        })

        if(!book){
            req.status(404).json({message : "Book not found"})
        }
        res.json(book)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})
router.post('/' , async (req,res) => {
    try {
        const {BookstoreId , BookName} = req.body;
        const book = await prisma.books.create({
            data :{
                BookstoreId,
                BookName,
            }
        })
        if(!book){
            res.status(404).json({message : "Book not found"})
        }

        res.json(book)


    }catch(error){
        res.status(500).json({error : error.message})

    }
})
router.put('/:id' , async (req,res) => { 
    try{
        const {id} = req.params;
        const {BookstoreId , BookName} = req.body;
        const book = await prisma.books.update({
            where : {
                id : Number(id),
            },
            data : {
                BookstoreId,
                BookName,
                
            }
        })
        if(!book){
            res.status(404).json({message : "Bookstore not found"})
        }
        res.json(book)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})

router.delete('/:id' , async(req,res) =>{
    try{
        const {id} = req.params;
    const book = await prisma.books.delete({
        where : {
            id : Number(id),
        }
    })
    if(!book){
        res.status(404).json({message : "Bookstore not found"})
    }
    res.json(book)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})




export default router;
