import express from 'express'
import booksRouter from './books.js'
import authorRouter from "./authors.js"
import storeRouter from "./bookstores.js"


const server = express()
server.use(express.json())

server.use('/api/books', booksRouter)
server.use('/api/author', authorRouter)
server.use('/api/store', storeRouter)

export default server