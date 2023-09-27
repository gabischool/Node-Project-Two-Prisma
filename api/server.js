import express from "express";
import { json } from "express";
import Authersroute from './authors.js'
import books from './books.js'
import bookStore from './bookstores.js'
const server = express()

server.use(json())

server.use('/api/authors', Authersroute)
server.use('/api/books', books)
server.use('/api/bookstore', bookStore)

export default server