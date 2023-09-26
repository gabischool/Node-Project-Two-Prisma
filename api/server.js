import express from 'express'
import { json } from 'express'
import AuthorRoute from './authors.js'
import BookStoreRoute from './bookstores.js'
import BookRoute from "./books.js"

const server = express()
server.use(json())

server.use('/api/authors', AuthorRoute)
server.use('/api/bookstore', BookStoreRoute)
server.use('/api/book', BookRoute)



export default server