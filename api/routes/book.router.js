import express from 'express'
import { add_book, get_books } from '../controllers/book.controllers.js';
import { authenticate } from '../middleware/user.auth.js';

export const book_routers = express.Router();
book_routers.post('/book', authenticate, add_book)
book_routers.get('/book', authenticate, get_books)