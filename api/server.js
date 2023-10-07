import express, {json}  from "express";
const server = express();
import authorsRouter from "./authors.js";
import bookstoreRouter from "./bookstores.js";
import booksRouter from "./books.js"

server.use(json());

server.use("/api/authors", authorsRouter);
server.use("/api/bookstores", bookstoreRouter);
server.use("/api/books", booksRouter);




export default server;