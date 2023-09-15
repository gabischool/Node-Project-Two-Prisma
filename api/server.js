import express from 'express';
import cors from 'cors';
import { user_routers } from './routes/user.router.js';
import { book_routers } from './routes/book.router.js';
import cookieParser from 'cookie-parser';
const server = express();
server.use(express.json());
server.use(cookieParser())
server.use(cors())
server.use('/api', user_routers)
server.use('/api', book_routers)
const PORT = 9000;
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});