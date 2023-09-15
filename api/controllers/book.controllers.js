import prisma from "../lib/index.js";

export const add_book = async(req, res) => {

    try {
        const { b_name, b_category, b_trending, b_price, b_description } = req.body;
        const book = await prisma.book.create({
            data: {
                b_name: b_name,
                b_category: b_category,
                b_trending: b_trending,
                b_price: b_price,
                b_description: b_description,
                userId: req.user.id
            }
        })
        console.log('what ', req.user);
        if (!book) {
            res.status(404).json({
                status: false,
                message: 'Not Found Any Request'
            })
        }

        res.status(200).json({
            status: false,
            message: 'successfully registered'
        })

    } catch (error) {
        console.log('error', error);
    }

}

export const get_books = async(req, res) => {
    try {
        const books = await prisma.book.findMany();
        if (books.length == 0) {
            res.status(500).json({
                status: false,
                message: 'Not Found Requested books'
            })
        }
        res.status(200).json(books);

    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({
            status: false,
            message: 'unknown error try again'
        })
    }
}