import express, { json } from 'express'
import prisma from './lib/index.js'
const router = express.Router()

router.get("/", async (req, res) => {
    try {

        const bookStores = await prisma.bookStore.findMany()
        if (bookStores.length === 0) {
            return res.status(401).json({ Message: "we could not found the bookstores" })
        }
        res.json(bookStores)
    } catch (error) {
        return res.status(500).json({ Message: Message.error })
    }

})
router.put("/update/:id", async (req, res) => {
    const { id } = req.params
    const { name,
        location } = req.body
    const updateBookStore = await prisma.bookStore.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            location
        }
    })
    if (!updateBookStore) {
        return res.status(401).json({ Message: "we could not update the bookstore" })
    }
    res.json(updateBookStore)
})

router.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    const deleteBookStore = await prisma.bookStore.delete({
        where: {
            id: Number(id)
        }
    })
    if (!deleteBookStore) {
        return res.status(401).json({ message: "failied to delete " })
    }
    res.json(deleteBookStore)
})

router.post("/create", async (req, res) => {
    try {
        const { name,
            location,
        } = req.body
        const newBookStore = await prisma.bookStore.create({
            data: {
                name, location
            }
        })
        if (!newBookStore) {
            return res.json({ Message: "failed to  creaate" })
        }
        res.json({ newBookStore })
    } catch (error) {
        return res.status(500).json({ Message: error.message })

    } finally {
        prisma.$disconnect();
    }
})

export default router