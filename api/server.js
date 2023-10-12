import express from "express";
import { json } from "express";
import Authorsroute from './authors.js'
import ownerRouter from './owner.js'
import books from './books.js'
import bookStore from './bookstores.js'
const server = express()

server.use(json())
server.use("/api/owners", ownerRouter)
server.use('/api/authors', Authorsroute)
server.use('/api/books', books)
server.use('/api/bookstore', bookStore)

export default server