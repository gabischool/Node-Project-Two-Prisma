import express from 'express';
import cors from 'cors';
import { user_routers } from './routes/user.router.js';
import { book_routers } from './routes/book.router.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), function(req, res) {
    const file = req.file
    return res.status(200).json(file.filename)
})
app.use('/api', user_routers)
app.use('/api', book_routers)
app.use('/api/upload', (req, res) => {
    return res.send('success')
})
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});