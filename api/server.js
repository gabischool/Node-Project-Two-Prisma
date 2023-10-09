//import express, {json} from "express";

import  express, { json } from 'express';
import bookstoreRouter from './bookstores.js';
import authorRouter from './authors.js';
import bookRouter from './books.js';

const server =express();
// const server = express();


server.use(json());

server.use("/api/authors",authorRouter)
server.use('/api/bookstores', bookstoreRouter);
server.use('/api/books', bookRouter);

export default server;