import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    res.status(200).json({ message: authors });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
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
      return res
        .status(400)
        .json({ message: `Author with id of ${id} not found` });
    }
    res.status(200).json({ message: author });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
      },
    });
    res.status(200).json({ message: author });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const author = await prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });
    if (!author) {
      return res
        .status(400)
        .json({ message: `Author with id of ${id} not found` });
    }
    res.status(200).json({ message: author });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.delete({
      where: {
        id: Number(id),
      },
    });
    if (!author) {
      return res
        .status(400)
        .json({ message: `Author with id of ${id} not found` });
    }
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

export default router;