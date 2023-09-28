import express from 'express'
import booksRouter from './books.js'
import authorsRouter from './authors.js'
import bookStoreRouter from './bookstores.js'

const server = express();

server.use(express.json());

server.use('/api/books', booksRouter)
server.use('/api/authors', authorsRouter)
server.use('/api/bookStores', bookStoreRouter)

export default server