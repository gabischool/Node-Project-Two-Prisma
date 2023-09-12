import express from "express";
import prisma from "./lib/index.js";

const route = express.Router();

// route.get("/", (req, res) => {

//   res.send("Hello World");
// });

// get all authors
route.get("/", async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    if (authors.length === 0) {
      res.status(404).json({ message: "No authors found" });
    }
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: "Failed a authors" });
  }
});

// get author by id
route.get("/:id", async (req, res) => {
  try {
    const author = await prisma.author.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ message: "author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get author" });
  }
});



// create new Author
route.post("/", async (req, res) => {
  try {
    const { name } = req.body
    const author = await prisma.author.create({
      data:{
        name : name,
      }
    });
    if(author){
    
       res.status(200).json(`Successfully created  author ${author.name}`);
    } else {
      res.status(404).json({ message: "Author not found" });
    }

   
  } catch (error) {
    res.status(500).json({ message: "Failed to add author" });
  }
});

// update author
route.put("/:id", async (req, res) => {
  try {
    const author = await prisma.author.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (author) {
      res.json(`successfully updated author with id ${req.params.id}`);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update author" });
  }
});
// delete author

route.delete("/:id", async (req, res) => {
  try {
    const author = await prisma.author.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (author) {
      res.status(200).json(`Successfully deleted author ${req.params.id} `);
    } else {
      res.status(404).json({ message: " author not found" });
    }
  } catch (err) {
    res.status(404).json({ message: "Failed to delete author" });
  }
});

export default route;
