import express from 'express'
import { add_book, delete_book, get_books } from '../controllers/book.controllers.js';
import { authenticate } from '../middleware/user.auth.js';

export const book_routers = express.Router();
book_routers.post('/books', authenticate, add_book)
book_routers.delete('/book/:id', delete_book)
book_routers.get('/books', get_books)