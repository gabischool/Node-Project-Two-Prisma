import jwt from 'jsonwebtoken'
import { jwt_secret } from '../config/config.js';
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(404).json({
            status: false,
            message: `unauthorized ${token} `
        })
    }
    try {
        // jwt.verify(token, jwt_secret, (err, user) => {
        //     if (err) return res.status(500).json({ message: err.message })
        //     res.userCookie = user;
        //     next();
        // });
        const docodedToken = jwt.verify(token, jwt_secret);
        req.userCookie = docodedToken;
        next();
    } catch (error) {
        console.log('error authenticating', error);
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const protected_route = ((req, res) => {
    res.json({
        status: true,
        message: 'Authenticated',
        user: req.userCookie,
    })
})