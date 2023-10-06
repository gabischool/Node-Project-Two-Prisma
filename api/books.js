import express, { json } from 'express'
import prisma from './lib/index.js'
const router = express.Router()
router.get("/", async (req, res) => {
    try {
        const books = await prisma.book.findMany()
        if (books.length === 0) {
            return res.status(404).json({ Message: "not found " })
        }
        res.json(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    } finally {
        prisma.$disconnect()
    }

})

// find unique book 
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const singleBook = await prisma.book.findUnique({
            where: {
                id: Number(id)
            }
        })
        if (!singleBook) {
            return res.status(404).json({ Message: "not found " })
        }
        res.json(singleBook)
    } catch (error) {
        res.status(500).json({ message: error.message })
    } finally {
        prisma.$disconnect()
    }

})
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, bookStoreId, authorId, price, image } = req.body


        const updateBook = await prisma.book.update({
            where: {
                id: Number(id)
            },
            data: {
                title, bookStoreId, authorId, price, image

            }
        })
        if (!updateBook) {
            return res.status(404).json({ Message: "we could not update " })
        }
        res.json(updateBook)
    } catch (error) {
        res.status(500).json({ Message: error.message })

    }
    finally {
        prisma.$disconnect()
    }
})

router.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    const deleteBook = await prisma.book.delete({
        where: {
            id: Number(id)
        }
    })
    if (!deleteBook) {
        return res.status(401).json({ message: "failied to delete " })
    }
    res.json(deleteBook)
})

router.post("/create", async (req, res) => {
    try {
        const { authorId,
            bookStoreId,
            title,
            price,
            image } = req.body
        const newBook = await prisma.book.create({
            data: {
                authorId, bookStoreId, title, price, image
            }
        })
        if (!newBook) {
            return res.json({ Message: "failed to  creaate" })
        }
        res.json({ newBook })
    } catch (error) {
        return res.status(500).json({ Message: error.message })

    } finally {
        prisma.$disconnect();
    }
})
// router.get("/api/books/:id", async (req, res) => {
//     try {
//         let { id } = req.params
//         let uniqueBook = await prisma.book.findUnique({
//             where: {
//                 id: Number(id)
//             }
//         })
//         if (uniqueBook.length === 0) {
//             return res.status(404).json({ message: "we could not found " })

//         }
//         res.json(uniqueBook)
//     } catch (error) {
//         res.status(500).json({ Message: "could not fuond" })

//     }
//     finally {
//         await $prisma.$disconnect()
//     }
// })
// router.post("/api/books/create", async (req, res) => {
//     try {
//         const { title, bookStoreId, authorId, price, image } = req.body
//         const books = await prisma.book.create({
//             data: {
//                 title,
//                 bookStoreId,
//                 authorId,
//                 price,
//                 image,

//             }
//         })
//         if (!books) {
//             return res.status(401).json({ Message: " can create" })
//         }
//         res.json(books)
//         console.log(books)

//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     } finally {
//         prisma.$disconnect()
//     }

// })

// find unique book 
// router.get("/api/books:id", async (req, res) => {
//     try {
//        const { id } = req.params
//        console.log(id)
//        const singleBook = await prisma.book.findUnique({
//           where: {
//              id: Number(id),
//           },
//        })
//        if (!singleBook) {
//           res.status(401).json({ Message: "book not found " })
//           console.log("not found")
//        }
//        res.json(singleBook)
//        console.log("found  end ...", singleBook)

//     } catch (error) {
//        res.status(401).json({ message: error.message })
//     }
//     finally {
//        prisma.$disconnect()
//     }


//  })






// router.post("/api/create", async (req, res) => {
//     const {title,bookStoreId,authorId,price,image} =  req.body
//     const books = await prisma.book.create({
//         data : {
//             title,
//             bookStoreId,
//             authorId ,
//             price,
//             image,

//         }
//     }) 
//     if (!books) {
//        return res.status(401).json({ Message: "books can create" })
//     }
//     res.json(books)
//     console.log("owner creation", books)


//  })
export default router


