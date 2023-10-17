import { jwt_secret } from "../config/config.js";
import prisma from "../lib/index.js"
import { hasspassword, compare_password } from "../utilities/user.utilities.js";
import jwt from 'jsonwebtoken'
export const register_user = async(req, res) => {

    try {

        const { username, email, password } = req.body;
        const hass_password = await hasspassword(password);
        const UserCheck = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        })

        if (UserCheck) {
            res.status(400).json({
                status: false,
                message: 'user already exists'
            })
        } else {
            const userCrate = await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: hass_password
                }
            })
            if (!userCrate) {
                res.status(404).json({
                    status: false,
                    message: 'Not Found Request'
                })
            }
            res.json({
                message: 'user successfully registered',
                userCrate
            });
        }

    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            error: error.message
        })
    }

}
export const update_user = async(req, res) => {

    try {

        const { username, email, password } = req.body;

        const hass_password = await hasspassword(password);
        const { id } = req.params;
        const userupdate = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                username: username,
                email: email,
                password: hass_password
            }

        })

        if (!userupdate) {
            return res.status(400).json({
                status: false,
                message: 'Not Found'
            })
        }
        res.json({
            message: 'successfully updated',
            userupdate
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message
        })
    }

}


export const delete_user = async(req, res) => {
    try {

        const { id } = req.params;
        const delete_user = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })

        if (!delete_user) {
            return res.status(400).json({
                status: false,
                message: 'User_id  Not Found'
            })
        }
        res.status(200).json({
            message: 'user successfully deleted',
            delete_user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            error: error.message
        });
    }
}
export const get_user = async(req, res) => {
    try {

        const users = await prisma.user.findMany();

        if (users.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'Not Found'
            })
        }

        res.json(users);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const get_user_byId = async(req, res) => {

    try {

        const { id } = req.params;

        const userInfo = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!userInfo) {
            return res.status(404).json({
                status: false,
                message: 'User Not Found'
            })
        }

        res.status(200).json(userInfo);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}


export const getUserLogin = async(req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: req.user.id
            }
        });
        if (!user) {
            res.status(404).json({
                status: false,
                message: 'Not Found Requested books'
            })
        }
        res.status(200).json(user);

    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({
            status: false,
            message: 'unknown error try again'
        })
    }
}


//login

// export const user_login = async(req, res) => {

//     try {

//         const { email, password } = req.body

//         const user = await prisma.user.findUnique({
//             where: {
//                 email: email
//             }
//         })
//         if (!user) {
//             res.status(404).send({
//                 status: false,
//                 message: 'invalid username or password '
//             })
//         }

//         const compare = comparePassword(password, user.password);

//         if (!compare) {
//             res.status(404).send({
//                 status: false,
//                 message: 'user not exist'
//             })
//         }

//         const token = jwt.sign({ id: user.id }, process.env.ACESS_TOKEN_SECRET);

//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: false,
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         })
//         return res.json({ token: token });

//     } catch (error) {
//         console.log(`error : ${error.message}`);
//     }

// };


export const user_login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            res.status(404).json({
                status: false,
                message: 'Invalid username or password',
            });
        }

        const compare = await compare_password(password, user.password);

        if (!compare) {
            res.status(404).json({
                status: false,
                message: 'Invalid username or password',
            });
        }

        jwt.sign({ id: user.id }, jwt_secret, (err, token) => {

            if (err) return res.status(404).json({ message: err.message });

            res.cookie('autToken', token, {
                httpOnly: true,
                secure: false,
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            res.json({ token })

        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({
            status: false,
            message: 'Internal server error',
        });
    }
};

export const Logout = async(req, res) => {
    try {

        res.clearCookie('token');
        res.send("Logout Successfully");

    } catch (err) {
        console.log("error at loginout", err);
        res.status(400).send("unknown error");
    }
};










// code blocked





export const getUserProfile = async(req, res) => {

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: req.userCookie.id
            }
        })

        user.password = undefined;

        res.json(user);

    } catch (err) {
        console.log("error at get user profile", err);
        res.status(400).send("unknown error");
    }


}









// export const getUserLogin = async(req, res) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.status(404).json({
//             status: false,
//             message: 'unauthorized'
//         })
//     }

//     try {
//         const decode = jwt.verify(token, process.env.JWT_SECRET);
//         const userId = decode.id
//         const result = await prisma.user.findUnique({
//             where: {
//                 id: userId
//             }
//         })
//         if (!result) {
//             res.status(404).json({
//                 status: false,
//                 message: 'Not Found User'
//             });
//         }
//         res.json(result);
//     } catch (error) {
//         console.log('err', error.message);
//         res.status(500).json({
//             status: false,
//             error: error.message
//         });
//     }
// }

// export const getUserLogin = async(req, res) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.status(401).json({
//             status: false,
//             message: 'Unauthorized',
//         });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const userId = decoded.id;
//         const user = await prisma.user.findUnique({
//             where: {
//                 id: userId,
//             },
//         });
//         if (!user) {
//             return res.status(404).json({
//                 status: false,
//                 message: 'User not found',
//             });
//         }
//         res.json(user);
//     } catch (error) {
//         console.log('err', error.message);
//         res.status(500).json({
//             status: false,
//             error: error.message,
//         });
//     }
// };