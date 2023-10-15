import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json({ message: books });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!book) {
      return res
        .status(400)
        .json({ message: `Book with id of ${id} not found` });
    }
    res.status(200).json({ message: book });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, authorId, bookstoreId, image } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        authorId,
        bookstoreId,
        image,
      },
    });
    res.status(200).json({ message: book });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, authorId, bookstoreId } = req.body;
    const book = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        authorId,
        bookstoreId,
      },
    });
    if (!book) {
      return res
        .status(400)
        .json({ message: `Book with id of ${id} not found` });
    }
    res.status(200).json({ message: book });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });
    if (!book) {
      return res
        .status(400)
        .json({ message: `Book with id of ${id} not found` });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

export default router;