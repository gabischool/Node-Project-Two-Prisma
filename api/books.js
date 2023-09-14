import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

// get all books
router.get("/", async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    if (books.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "Authores not found" });
    }

    res.json(books);
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

// get book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!book) {
      return res.status(404).json({ status: 404, message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

// create new book
router.post("/", async (req, res) => {
  try {
    const { authorId, title, price, image } = req.body;

    const newBook = await prisma.book.create({
      data: {
        authorId,
        title,
        price,
        image,
      },
    });
    if (!newBook) {
      return res
        .status(400)
        .json({  message: "Book was not created!" });
    }

    res
      .status(200)
      .json({  message: "Book successFully created!" });
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

// update book
router.put("/:id", async (req, res) => {
  try {
    const updateBook = await prisma.book.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!updateBook) {
      return res
        .status(400)
        .json({  message: "Book was not updated" });
    }

    res.status(200).json({  message: "Book successFully updated" });
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

// update books

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deleteBook) {
      return res
        .status(400)
        .json({  message: "Book was not deleted!" });
    }

    res
      .status(200)
      .json({  message: `Book ${id} successFully deleted` });
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

export default router;