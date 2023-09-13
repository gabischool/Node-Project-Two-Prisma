import express from 'express';
import prisma from './lib/index.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        
        const bookStores = await prisma.bookStore.findMany();
        if(bookStores.length === 0) {
            return res.status(404).json({message: "BookStores not found"})
        }

        res.json(bookStores);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.get('/:id', async (req, res) => {
    try {
        
        const {id} = req.params;

        const bookStore = await prisma.bookStore.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!bookStore) {
            return res.status(404).json({message: "BookStore not found"})
        }

        res.json(bookStore)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/', async (req, res) => {
    try {
        
        const {bookId, name, location} = req.body;

        const createBookStore = await prisma.bookStore.create({
            data: {
                bookId,
                name, 
                location,
            },
        });

        if(!createBookStore) {
            return res.status(400).json({ message: "BookStore was not created!"})
        }

        res.status(200).json({status: 200,
             message: "BookStore successFully created!",
             data: createBookStore
             
            })

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

router.put('/:id', async (req, res) => {
    try {
        
        const {id} = req.params;
        const {bookId, name, location} = req.body;

        const updateBookStore = await prisma.bookStore.update({
            where: {
                id: Number(id),
            },

            data: {
                bookId,
                name,
                location,
            }
        });

        if(!updateBookStore) {
            return res.status(400).json({status: 400, message: "BookStore was not updated!"})
        }

        res.status(200).json({status: 200,
             message: "BookStore successFully updated!",
             data : updateBookStore
            })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        
        const {id} = req.params;

        const deletebookStore = await prisma.bookStore.delete({
            where: {
                id: Number(id),
            },
        });

        if(!deletebookStore) {
            return res.status(400).json({message: "BookStore was not  deleted!"})
        }

        res.status(200).json({message: `BookStore successFully deleted!`})

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
});

export default router