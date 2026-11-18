import express from 'express'
import { adminLogin, loginUser, registerUser, getUserProfile } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);
userRouter.post('/profile', authUser, getUserProfile);

export default userRouter


