import express from "express";
import prisma from "./lib/index.js";
const router = express.Router();

//create bookstore route
router.get("/", async(req, res) => {
    try {
        const bookstores = await prisma.bookstore.findMany();

        if (bookstores) {
            res.status(200).json(bookstores);
          } else {
            res.status(404).json({ message: "bookstores not found" });
          }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Get Single bookstore
router.get("/:id", async(req, res) => {
    try {
        const bookstore = await prisma.bookstore.findUnique({
            where: {
                id:Number(req.params.id)
            },
        });

        if(bookstore) {
            res.status(200).json(bookstore);
        } else {
            res.status(404).json({message : "bookstore not found"})
        }

    } catch (error) {
        res.status(500).json({message : "failed to get bookstore"})
    }
});

//Add bookstore
router.post("/", async(req, res) => {
    try {
        const bookstore = await prisma.bookstore.create({
            data: req.body,
        });
        res.status(201).json(bookstore);
    } catch (error) {
        res.status(500).json({message: "failed to add bookstore"})
    }
});

//update bookstore
router.put("/:id", async(req, res) => {
    try {
        const bookstore = await prisma.bookstore.update({
            where : {
                id:Number(req.params.id),
            },
            data : req.body,
        });

        if(bookstore) {
            res.status(200).json(bookstore);
        } else {
            res.status(404).json({message:"bookstore not found"})
        }
    } catch (error) {
        res.status(500).json({message : "failed to update bookstore"})
    }
});

//Delete bookstore
router.delete("/:id", async(req, res) => {
    try {
        const bookstore = await prisma.bookstore.delete({
            where: {
                id:Number(req.params.id),
            },
        });

        if(bookstore) {
            res.status(200).json({message: "bookstore deleted"})
        } else {
            res.status(404).json({message: "bookstore not found"});
        }
    } catch (error) {
        res.status(500).json({message: "Failed to delete bookstore"})
    }
});



export default router;