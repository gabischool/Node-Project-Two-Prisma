import express from 'express';
import prisma from './lib/index.js';
const router = express.Router();

// create author Route

// find all 
router.get('/', async (req,res) => {
  try {
    const author = await prisma.author.findMany();
   if(author.length === 0){
    res.status(404).json({error : "Author Not found!"})
   }
   res.json(author);
  }
  catch(error){
    res.status(500).json({error : error.message})
  }
});

// find one
router.get("/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const author = await prisma.author.findUnique({
        where: {
          id: Number(id), // Parse the id as an integer using base 10
        },
      });
  
      if (!author) {
        return res.status(404).json({ error: "Author not found!" });
      }
  
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


// create author
router.post("/", async (req, res) => {
    try {
        const {name , email} = req.body;
      const author = await prisma.author.create({
        data: {
            name ,
            email,
        }
      });
      if(!author){
        res.status(404).json({message : "Anyone Author"})
      }
      
  
      res.status(201).json(author);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Failed to add owner" });
    }
  });

// update the author
router.put("/:id", async(req,res) =>{
    try{
        const {id} = req.params;
        const {name , email} = req.body;
        const author = await prisma.author.update({
            where : {
                id : Number(id)
            },
            data :{
                name,
                email,
            }
        })
        if(!author){
            res.status(404).json({error : "Error updating"})
        }
        res.json(author)
        
        
    }catch(error){
        res.status(500).json({error : error.message})
    }
})

// delete the author
router.delete("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const author = await prisma.author.delete({
            where : {
                id : Number(id)
            }
        
        });
        if(!author){
            res.status(404).json({error : "Error deleting"})
        }

        res.json(author)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})
export default router;