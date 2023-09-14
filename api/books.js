import express from "express";
import prisma from "./lib/index.js"

// create book router

const router = express.Router();

router.get("/", async (req, res) => {
    
    try {
        const books= await prisma.book.findMany();
        if (books.length === 0) {
            return res.status(404).send("No books found");
        }
        res.json(books);
          } catch (error) {
        res.status(500).send(error.message);
        }} );

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }});

    //create post request for /api/books

router.post("/", async (req, res) => {

    const {title, authorId} = req.body;
    try {
        const book = await prisma.book.create({
            data: {
                title,
                authorId: Number(authorId),
            },
        });
          if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (error) {
        res.status(500).send(error.message);

    }});

    //create put request for /api/books/:id

    router.put("/:id", async (req, res) => {
        try {
            const {id} = req.params;
            const {title, authorId} = req.body;
            const book = await prisma.book.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title,
                    authorId: Number(authorId),
                },
            });
            if (!book) {
                return res.status(404).send("Book not found");
            }
            res.json(book);
        } catch (error) {  
            res.status(500).send(error.message);
        }});

        //create delete request for /api/books/:id

        router.delete("/:id", async (req, res) => {
            const {id} = req.params;
            try {
                const book = await prisma.book.delete({
                    where: {
                        id: Number(id),
                    },
                });
                if (!book) {
                    return res.status(404).send("Book not found");
                }
                res.json({message: "Book deleted successfully"});
            } catch (error) {
                res.status(500).send(error.message);
            }});









export default router;
