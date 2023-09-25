import express from 'express'

import  prisma  from './lib/index.js';


const router = express.Router();

// create author route

router.get("/", async (req ,res)=>{
  try{
    const bookStores  = await prisma.bookStore.findMany();

    if(bookStores){
     res.status(200).json(bookStores)
    }else{
         res.status(404).json({error: 'No bookStores found'});
    }

  }catch(err){
    res.status(500).json({message: "failed to get bookStores"})
  }
});

router.get('/:id', async (req ,res)=>{

  try{

    const bookStore = await prisma.bookStore.findUnique({
      where:{
        id: Number(req.params.id),
      },
    });

    if(bookStore){
      res.status(200).json(bookStore)
     }else{
    
         res.status(404).json({error: 'No bookStore found'});
    }
    
  }catch(err){
    res.status(500).json({err:  err.message})
  }
});

// Add Author
router.post("/", async (req, res) => {
  try {
  
    const newBookStore = await prisma.bookStore.create({
      data: req.body
     
    });

    res.status(201).json(newBookStore);
  } catch (err) {
    res.status(500).json({ message: "Failed to add bookStore" });
  }
});

// Update Author
router.put("/:id", async (req, res) => {
  try {
    const bookStore = await prisma.bookStore.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (bookStore) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ message: "BookStore not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update BookStore" });
  }
});

// Delete Author
router.delete("/:id", async (req, res) => {
  try {
    const bookStore = await prisma.bookStore.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (bookStore) {
      res.status(200).json({ message: "BookStore deleted" });
    } else {
      res.status(404).json({ message: "BookStore not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete bookStore" });
  }
});


export default router;