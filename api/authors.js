
import express from "express";


const router = express.Router();

// create a route for /api/authors

router.get("/", (req, res) => {
    res.send(" Hello from Authors");
    });

export default router;