import express from 'express'
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        const books = await prisma.book.findMany();
        if(books.length === 0) {
            return res.status(404).json({status: 404, message: "Books not found!"})
        }

        res.json(books)

    } catch (error) {
        res.status(500).json({status: 500, error: error.message})
    }
});

router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params

        const book = await prisma.book.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!book) {
            return res.status(404).json({status: 404, message: "Book not found"})
        }

        res.json(book)

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})

router.post('/',async(req, res)=> {
    try {
      const {authorId,title,price,image,} =req.body;
      const book = await prisma.book.create({
        data: {authorId,
            title,
            price,
            image,
        }
      })
      if (!book){
        return res.status(404).json({ error: "No book found"});
      }
      res.json(book);
    }catch (error){
      res.status(500).json({ error: error.message}) 
    }
    
  })

router.put('/', async (req, res) => {
    try {

        const {id} = req.params;
        const {authorId,title, price, image} = req.body;

        const updateBook = await prisma.book.update({
            where: {
                id: Number(id),
            },

            data: {
                authorId,
                title,
                price,
                image,
            },
        });

        if(!updateBook) {
            return res.status(400).json({status: 400, message: "Book was not updated!"})
        }
        res.json(book)

    } catch (updateBook) {
        res.status(500).json({status: 500, message: error.message})
    }
})

router.delete('/', async (req, res) => {
    try {

        const {id} = req.params;

        const deleteBook = await prisma.book.delete({
            where: {
                id: Number(id),
            },
        });

        if(!deleteBook) {
            return res.status(400).json({status: 400, message: "Book was not deleted!"})
        }

        res.json(deleteBook)

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})

export default router