import { postUser, isExist } from '../controllers/userController'
var express = require('express')
var userRouter = express.Router()

// middleware that is specific to this router
userRouter.post('/signIn', postUser)
userRouter.post('/login', isExist)
// userRouter.get('/', (req, res, next) => {
//   try {
//     res.render('user')
//   } catch (error) {
//     res.send(error.message)
//   }
// })

export default userRouter
