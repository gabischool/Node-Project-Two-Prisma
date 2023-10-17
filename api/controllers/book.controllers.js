import prisma from "../lib/index.js";

export const add_book = async(req, res) => {

    try {
        const { b_name, b_category, b_trending, b_price, b_description, b_image } = req.body;
        const book = await prisma.book.create({
            data: {
                b_name: b_name,
                b_category: b_category,
                b_trending: b_trending,
                b_price: parseFloat(b_price),
                b_description: b_description,
                b_image: b_image,
                userId: req.userCookie.id
            }
        })
        console.log('what ', req.userCookie);
        if (!book) {
            res.status(404).json({
                status: false,
                message: 'Not Found Any Request'
            })
        }

        res.status(200).json({
            status: true,
            message: 'successfully registered'
        })

    } catch (error) {
        console.log('error', error);
    }

}


export const update_book = async(req, res) => {

    try {
        const { b_name, b_category, b_trending, b_price, b_description, b_image } = req.body;
        console.log('req body', req.body);
        const book = await prisma.book.updateMany({
            where: { id: Number(req.params.id) },
            data: {
                b_name: b_name,
                b_category: b_category,
                b_trending: b_trending,
                b_price: parseFloat(b_price),
                b_description: b_description,
                b_image: b_image,
                userId: req.userCookie.id
            }
        })
        console.log('what ', req.userCookie);
        if (!book) {
            res.status(404).json({
                status: false,
                message: 'Not Found Any Request'
            })
        }

        res.status(200).json({
            status: true,
            message: 'successfully Updated'
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
        } else {
            res.status(200).json(books);
        }

    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({
            status: false,
            message: 'unknown error try again'
        })
    }
}

export const delete_book = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await prisma.book.delete({
            where: {
                id: Number(id),
                userId: req.userCookie.id

            }
        });

        if (!book) {
            return res.status(404).json({
                status: false,
                message: 'book not found'
            })
        }

        console.log('what ', req.userCookie);

        res.json({
            status: true,
            message: 'successfull deleted'
        });

    } catch (error) {
        console.log('error', error.message);
    }
}