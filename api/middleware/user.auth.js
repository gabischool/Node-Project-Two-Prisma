import jwt from 'jsonwebtoken'
import { jwt_secret } from '../config/config.js';
export const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(404).json({
            status: false,
            message: 'unauthorized'
        })
    }
    try {
        const decode = jwt.verify(token, jwt_secret);
        req.user = decode;
        next();
    } catch (error) {
        console.log('error authenticating', error);
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}