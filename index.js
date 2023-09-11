// Import server here and start the application
import express from 'express'
import server from './api/server.js'

const port = 4000;

server.listen(port,()=>{
    console.log(`server running on port ${port}`)
})