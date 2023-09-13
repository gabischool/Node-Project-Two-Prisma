
import express, {json} from "express";
// import booksRouter from "./books.js";
import authorsRouter from "./authors.js";
// import  bookstores from "./bookstores.js;

const server = express();

server.use(json());

// server.use("/api/books", booksRouter);
server.use("/api/authors", authorsRouter);
// server.use("./api/bookstores", bookstoresRouter);


export default server;