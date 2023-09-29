import express,{json} from 'express';


const app = express();
import authorsRouter from './authors.js';
import  bookstores  from './bookstores.js';
import books from './books.js';







app.use(json());
app.use('/api/author',authorsRouter)
app.use('/api/bookstore' ,bookstores)
app.use('/api/books' ,books)



export default app;

