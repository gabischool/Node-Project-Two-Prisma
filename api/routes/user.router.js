import express from 'express';
import { getUserProfile, get_user, get_user_byId, register_user, update_user, user_login } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/user.auth.js';
export const user_routers = express.Router();

user_routers.get('/users', get_user);
user_routers.get('/user/:id', get_user_byId);
user_routers.post('/user', register_user)
user_routers.put('/user/:id', update_user)
user_routers.post('/user/login', user_login)
user_routers.get('/profile', authenticate, getUserProfile)
    // user_routers.get('/protected', authenticate, protected_route)