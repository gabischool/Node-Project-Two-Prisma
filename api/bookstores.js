import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

// get all bookstores
router.get("/", async (req, res) => {
  try {
    const bookStores = await prisma.bookStore.findMany();
    if (bookStores.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "BookStores not found" });
    }

    res.json(bookStores);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// get bookstore by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const bookStore = await prisma.bookStore.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!bookStore) {
      return res
        .status(404)
        .json({ status: 404, message: "BookStore not found" });
    }

    res.json(bookStore);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});


// Create new BookStore
router.post("/", async (req, res) => {
  try {
    const { bookId, name, location } = req.body;

    const newBookStore = await prisma.bookStore.create({
      data: {
        bookId,
        name,
        location,
      },
    });

    if (!newBookStore) {
      return res
        .status(400)
        .json({  message: "BookStore was not created!" });
    }

    res
      .status(200)
      .json({ message: "BookStore successFully created!" });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// update bookstore
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { bookId, name, location } = req.body;

    const updateBookStore = await prisma.bookStore.update({
      where: {
        id: Number(id),
      },

      data: {
        bookId,
        name,
        location,
      },
    });

    if (!updateBookStore) {
      return res
        .status(400)
        .json({  message: "BookStore was not updated!" });
    }

    res
      .status(200)
      .json({ message: "BookStore successFully updated!" });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

//delete bookstore
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBookStore = await prisma.bookStore.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deleteBookStore) {
      return res
        .status(400)
        .json({  message: "BookStore was not created!" });
    }

    res
      .status(200)
      .json({ message: `BookStore ${id} successFully deleted!` });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

export default router;