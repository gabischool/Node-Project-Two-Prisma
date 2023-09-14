import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

// get all authors
router.get("/", async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    if (authors.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "Authores not found" });
    }

    res.json(authors);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// get author by id
router.get("/:id", async (req, res) => {
  try {
    const author = await prisma.author.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!author) {
      return res.status(404).json({ status: 404, message: "Author not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});
// create new Author
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = await prisma.author.create({
      data: {
        name: name,
        email: email,
      },
    });
    if (!author) {
      return res
        .status(400)
        .json({ status: 400, message: "Author was not created!" });
    }

    res
      .status(200)
      .json({  message: "Author successFully created!" });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// update author
router.put("/:id", async (req, res) => {
  try {
    const author = await prisma.author.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!author) {
      return res
        .status(400)
        .json({ status: 400, message: "Author was not updated!" });
    }

    res
      .status(200)
      .json({  message: "Author successFully updated!" });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// delete author
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
        .json({ status: 400, message: "Author was not deleted!" });
    }

    res
      .status(200)
      .json({  message: `Author ${id} successFully deleted` });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

export default router;