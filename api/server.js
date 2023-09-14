import express from "express"
import Author from "./authors.js"



const server = express()



server.use(express.json())




server.use("/api/author" , Author)



export default server