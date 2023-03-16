import { postUser, isExist, modifyEmail } from '../controllers/userController'
var express = require('express')
var userRouter = express.Router()

// middleware that is specific to this router
userRouter.post('/signIn', postUser)
userRouter.post('/login', isExist)
userRouter.post('/edit', modifyEmail)

export default userRouter
