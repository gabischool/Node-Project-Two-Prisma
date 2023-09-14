
import express from "express";
import prisma from "./lib/index.js";

const router = express.Router();

// create a route for /api/authors

router.get("/", async(req, res) => {
    
    try {
        const authors = await prisma.author.findMany();
        if (authors.length === 0) {
            return res.status(404).send("No authors found");
        }
        res.json(authors);
    } catch (error) {
    
        res.status(500).send(error.message);
    }
});

router.get("/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const author = await prisma.author.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!author) {
            return res.status(404).send("Author not found");
        }
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

  //create post request for /api/authors

router.post("/", async(req, res) => {
    const {name, email} = req.body;
    try {
        const author = await prisma.author.create({
            data: {
                name,
                email,
            },
        });
          if (!author) {
            return res.status(404).send("Author not found");
        }
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);

    }});

    //create put request for /api/authors/:id

    router.put("/:id", async(req, res) => {

        const {id} = req.params;
        const {name, email} = req.body;
        try {
            const author = await prisma.author.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name,
                    email,
                },
            });

            if (!author) {
                return res.status(404).send("Author not found");
            }
            res.json({message: "author was created sucessfully", author});
        } catch (error) {
            error.status(500).send(error.message);
        }});


        //create delete request for /api/authors/:id

        router.delete("/:id", async(req, res) => {
            const {id} = req.params;
            try {
                const author = await prisma.author.delete({
                    where: {
                        id: Number(id),
                    },
                });
                if (!author) {
                    return res.status(404).send("Author not found");
                }
                res.json(author);
            } catch (error) {
                res.status(500).send(error.message);
            }});







export default router;