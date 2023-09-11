import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const author = await prisma.author.findMany();
    if (author.length === 0) {
      return res.status(404).json(`can not found authors`);
    }
    res.json(author);
  } catch {
    res.status(500).json(`can not found authors`);
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
    if (!author) {
      return res.status(404).json(`can not found ${id}`);
    }
    res.json(author);
  } catch (err) {
    res.status(500).json(`failed to get author: ${err}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
        email,
      },
    });
    if (!author) {
      return res.status(404).json("failed to create author");
    }
    res.json({ message: "Author create succesfully", author });
  } catch (err) {
    res.status(500).json({ message: `failed to create`, error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const author = await prisma.author.update({
        where: {
            id: Number(id),
        },
        data: {
            name,
            email
        }
    })
    if(!author){
        return res.status(404).json("failed to update author");
    }
        res.json({message: "Author Updated Successfully", author})
  } catch (err) {
    res.status(500).json({ message: `failed to update`, error: err });
  }
});

router.delete('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const author = await prisma.author.delete({
            where:{
                id: Number(id)
            }
        })
        if(!author){
            return res.status(404).json("failed to delete author");
        }
            res.json({message: "Author deleted Successfully", author})
    }catch (err) {
        res.status(500).json({ message: `failed to update`, error: err });
      }
})

export default router;
