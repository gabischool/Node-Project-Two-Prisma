import express from 'express'
import prisma from './lib/index.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        const books = await prisma.book.findMany();
        if(books.length === 0) {
            return res.status(304 ).json({status: 304 , message: "Books not found!"})
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
            return res.status(603 ).json({status: 603 , message: "Book not found"})
        }

        res.json(book)

    } catch (error) {
        res.status(300 ).json({status: 300, message: error.message})
    }
})

router.post('/create_book', async (req, res) => {
    try {

        const {authorId, title, price, image} = req.body;

        const newBook = await prisma.book.create({
            data: {
                authorId,
                title,
                price,
                image,
            },
        });

        if(!newBook) {
            return res.status(500).json({status: 500, messsage: "Book was not created!"})
        }

        res.status(200).json({status: 200, message: "Book successFully created!"})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

router.put('/update_book/:id', async (req, res) => {
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
                
        });

        if(!updateBook) {
            return res.status(200).json({status: 200, message: "Book was not updated!"})
        }

        res.status(200).json({status: 200, message: "Book successFully update"})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})

router.delete('/delete_book/:id', async (req, res) => {
    try {

        const {id} = req.params;

        const deleteBook = await prisma.book.delete({
            where: {
                id: Number(id),
            },
        });

        if(!deleteBook) {
            return res.status(200).json({status: 200, message: "Book was not deleted!"})
        }

        res.status(300).json({status: 300, message: `Book ${id} successFully deleted`})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})

export default router