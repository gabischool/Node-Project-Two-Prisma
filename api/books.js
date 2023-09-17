import express from "express";

import prisma from "./lib/index.js";

const router = express.Router();

// create Book route

router.get("/", async (req, res) => {
  try {
    const books = await prisma.book.findMany();

    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ error: "No Books found" });
    }
  } catch (err) {
    res.status(500).json({ message: "failed to get books" });
  }
});

//get single book

router.get("/:id", async (req, res) => {
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: "No Books found" });
    }
  } catch (err) {
    res.status(500).json({ message: "failed to get book" });
  }
});
// Get Book by Author id
router.get('/author/:id', async (req, res) => {
  try {
      const book = await prisma.book.findMany({
          where: {
              authorId: Number(req.params.id),
          },
      });
      if(book) {
          res.status(200).json(book);
      } else {
          res.status(404).json({ message: 'Book not found' });
      }
  } catch(err) {
      res.status(500).json({ message: 'Failed to get book' });
  }
});

// Add Book

router.post("/", async (req, res) => {
  try {
    const newBook = await prisma.book.create({
      data: req.body
    });
    if (newBook) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to add book" });
  }
});

// Update Book

router.put("/:id", async (req, res) => {
  try {
    const book = await prisma.book.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update book" });
  }
});

// Delete Book
router.delete("/:id", async (req, res) => {
  try {
    const book = await prisma.book.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (book) {
      res.status(200).json({ message: "Book deleted" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete book" });
  }
});

export default router;
