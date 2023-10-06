import express, { json } from 'express'
import prisma from './lib/index.js'
const router = express.Router()

router.get("/", async (req, res) => {
    try {

        const author = await prisma.author.findMany()
        if (author.length === 0) {
            return res.status(401).json({ Message: "we could not found the author" })
        }
        res.json(author)
    } catch (error) {
        return res.status(500).json({ Message: Message.error })
    }

})
router.put("/update/:id", async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const updateAuthor = await prisma.author.update({
        where: {
            id: Number(id)
        },
        data: {
            name
        }
    })
    if (!updateAuthor) {
        return res.status(401).json({ Message: "we could not update the author" })
    }
    res.json(updateAuthor)
})

router.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    const deleteAuthor = await prisma.author.delete({
        where: {
            id: Number(id)
        }
    })
    if (!deleteAuthor) {
        return res.status(401).json({ message: "failied to delete " })
    }
    res.json(deleteAuthor)
})

router.post("/create", async (req, res) => {
    try {
        const { name,
            
        } = req.body
        const newAuthor = await prisma.author.create({
            data: {
                name
            }
        })
        if (!newAuthor) {
            return res.json({ Message: "failed to  creaate" })
        }
        res.json({ newAuthor })
    } catch (error) {
        return res.status(500).json({ Message: error.message })

    } finally {
        prisma.$disconnect();
    }
})

export default router