import express from 'express';
import prisma from './lib/index.js';


const router = express.Router();

// Get All Books
router.get("/", async(req, res)=>{
    try{
        const books = await prisma.book.findMany();
        if(books.length === 0){
            return res.status(404).json({error:'No Books found.'});
        }else return res.json(books);
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Get Single Book by ID.
router.get('/:id', async(req, res)=>{
    try{
        const { id } = req.params;
        const book = await prisma.book.findUnique({
        where:{
            id:(Number(id))
        },
    });
    if(!book){
        return res.status(404).json({ error: "Book Not Found"})
    }else return res.json(book)
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//POST or CREATE new BOOK
router.post("/", async(req, res)=>{
    try{
        const { title , authorId , price , bookStoreId , image} = req.body;
        const createBook = await prisma.book.create({
            data:{
                title,
                authorId,
                price,
                bookStoreId,
                image
            }
        });
        if(!createBook){
            return res.status(404).json({status:"Book Not Created"})
        }else return res.json({message:"New Book created successfully",createBook})
    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Update Book
router.put("/:id", async(req, res)=>{
    try{
        const { id } = req.params;
        const { title , authorId , price , bookStoreId , image } = req.body;
        const updateBook = await prisma.book.update({
        where:{
            id:(Number(id))
        },
        data:{
            title,
            authorId,
            price,
            bookStoreId,
            image
        }
    });
    if(!updateBook){
        return res.status(404).json({status:"Book Not Found."})
    }else return res.json({message:"Book updated successfully",updateBook})

    }catch (error){
        res.status(500).json({error:error.message})
    }
});

//Delete Book
router.delete("/:id", async(req, res)=>{
    try{
        const { id } = req.params;
        const deleteBook = await prisma.book.delete({
        where:{
            id:(Number(id))
        },
    });
    if(!deleteBook){
        return res.status(404).json({status:"Book Not Found."})
    }else return res.json({message:"Book deleted successfully",deleteBook})

    }catch (error){
        res.status(500).json({error:error.message})
    }
})


export default router;