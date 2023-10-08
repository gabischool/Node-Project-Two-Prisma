import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const bookStores = await prisma.bookStore.findMany();
    if (bookStores.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "BookStores not found in Our Db" });
    }

    res.json(bookStores);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

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
        .json({ status: 404, message: "BookStore not found in Our Db" });
    }

    res.json(bookStore);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.post("/create_bookStore", async (req, res) => {
  try {
    const { name, location } = req.body;

    const newBookStore = await prisma.bookStore.create({
      data: {
        name,
        location,
      },
    });

    if (!newBookStore) {
      return res
        .status(400)
        .json({ status: 400, message: "BookStore was not created!" });
    }

    res
      .status(200)
      .json({ status: 200, message: "BookStore successFully created!" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.put("/update_bookStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const updateBookStore = await prisma.bookStore.update({
      where: {
        id: Number(id),
      },

      data: {
        name,
        location,
      },
    });

    if (!updateBookStore) {
      return res
        .status(400)
        .json({ status: 400, message: "BookStore was not updated!" });
    }

    res
      .status(200)
      .json({ status: 200, message: "BookStore successFully updated!" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.delete("/delete_bookStore/:id", async (req, res) => {
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
        .json({ status: 400, message: "BookStore was not created!" });
    }

    res
      .status(200)
      .json({ status: 200, message: `BookStore ${id} successFully deleted!` });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

export default router;
