import express, { json } from "express";

const server = express();

import authorsRouter from "./authors.js";
import booksRouter from "./books.js";

import bookStoreRouter from "./bookstores.js";

server.use(json());
server.use("/api/authors", authorsRouter);
server.use("/api/books", booksRouter);
server.use("/api/bookstores", bookStoreRouter);

export default server;
