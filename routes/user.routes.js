import { Router } from "express";
import { getUsers, getUser } from '../controllers/user.controller.js'
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers)

userRouter.get('/:id', authorize, getUser)

userRouter.post('/', ( req,res ) => res.send({ tile : 'CREATE new users' }))

userRouter.put('/:id', ( req,res ) => res.send({ tile : 'UPDATE user' }))

userRouter.delete('/:id', ( req,res ) => res.send({ tile : 'DELETE user' }))

export default userRouter;