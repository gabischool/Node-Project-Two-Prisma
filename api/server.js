import express from "express";
import authorsRoute from "./authors.js";
import booksRoute from "./books.js";
import bookStoreRouter from "./bookstores.js";
const server = express();

server.use(express.json());

server.use("/api/authors", authorsRoute);
server.use("/api/books", booksRoute);
server.use("/api/bookstores", bookStoreRouter);

export default server;
