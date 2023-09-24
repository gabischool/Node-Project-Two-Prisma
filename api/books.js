import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    if (!books) {
      res.status(400).json({ message: "No books found" });
    }
    res.status(200).json({ message: books });
  } catch (error) {
    console.error(error);
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
        .json({ message: `No book with id of ${id} were found` });
    }
    res.status(200).json({ message: book });
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;
    const book = await prisma.book.findUnique({
      where: {
        id: id,
      },
      data: {
        name,
        location,
      },
    });
    if (!book) {
      res.status(400).json({ message: `Cannot update book with id of ${id}` });
    }
    res.status(200).json({ message: book });
  } catch (error) {
    console.error(error);
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
        .json({ message: `Cannot delete book with id of ${id}` });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
  }
});

export default router;
