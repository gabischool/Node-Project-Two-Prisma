import express from "express";
import bookstoreRouter from "./bookstores.js";
import authorRouter from "./authors.js";
import bookRouter from "./books.js";

const server = express();

server.use(express.json());
server.use("/bookstore", bookstoreRouter);
server.use("/author", authorRouter);
server.use("/book", bookRouter);

export default server;
