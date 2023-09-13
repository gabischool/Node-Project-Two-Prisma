import express from "express";
import prisma from './lib/index.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const authors = await prisma.author.findMany();
        
        if (authors.length > 0) {
            res.json(authors);
        } else {
            res.status(404).json({ status: 404, message: "Authors not found" });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        
        const { id } = req.params;

        const author = await prisma.author.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(author) {
            res.json(author)
        }
       
    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});


router.post("/", async (req, res) => {
    try {
        const { name } = req.body;

        const createAuthor = await prisma.author.create({
            data: {
                name,
            },
        });

        res.status(201).json({
            status: 201,
            message: "Author successfully created!",
            data: createAuthor, 
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updateAuthor = await prisma.author.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
            },
        });

        if (!updateAuthor) {
            return res.status(400).json({ status: 400, message: "Author was not updated!" });
        }

        res.status(200).json({
            status: 200,
            message: "Author successfully updated!",
            data: updateAuthor
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        
        const { id } = req.params;

        const deleteAuther = await prisma.author.delete({
            where: {
                id: Number(id),
            },
        });

        if(!deleteAuther) {
            return res.status(400).json({status: 400, message: "Author was not deleted!"})
        }

        res.status(200).json({message: `Author  successFully deleted`})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})



export default router