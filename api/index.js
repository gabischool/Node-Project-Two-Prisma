
import express,{json} from 'express'
import bookeRouter from './books.js'
import bookStoreRouter from './bookstores.js'
import authorRouter  from './authors.js'
const server =  express()

server.use(json())
server.use("/api/books",bookeRouter)
server.use("/api/bookstores",bookStoreRouter)
server.use("/api/authors",authorRouter)
export default server
