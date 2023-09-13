import Express from "express";
import { json } from "express";
import BookStore from './bookstores.js'
import Book from './books.js'
import Authors from './authors.js'
const server = Express()


server.use(json())

server.use('/api/authers', Authors)
server.use('/api/bookstore', BookStore)
server.use('/api/book', Book)

export default server;