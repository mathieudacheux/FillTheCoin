import db from '../db'
import UserType from '../models/user'
import { genSalt, hash, compare } from 'bcrypt'
import admin from 'firebase-admin'

const postUser = async (req, res) => {
  try {
    const saltRounds = await genSalt(10)
    const hashedPassword = await hash(req.body.password, saltRounds)
    const userJson: UserType = {
      email: req.body.email,
      password: hashedPassword,
    }
    const user = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    })
    db.collection('user')
      .doc(user.uid)
      .set({ ...userJson, id: user.uid })
    req.session.idUser = user.uid
    return res.redirect('/')
  } catch (error) {
    res.send(error.message)
  }
}

const isExist = async (req, res) => {
  try {
    const user = await db
      .collection('user')
      .where('email', '==', req.body.email)
      .get()
    const compareUser = await compare(
      req.body.password,
      user.docs[0].data().password,
    )
    if (!compareUser) {
      return res.redirect('/')
    } else {
      req.session.idUser = user.docs[0].data().id
      return res.redirect('/')
    }
  } catch (error) {
    res.send(error.message)
  }
}

const modifyEmail = async (req, res) => {
  try {
    const user = await db
      .collection('user')
      .where('id', '==', req.session.idUser)
      .get()
    if (user.docs[0].data().id === req.session.idUser) {
      admin
        .auth()
        .updateUser(req.session.idUser, {
          email: req.body.email,
        })
        .then(() => {
          db.collection('user')
            .doc(req.session.idUser)
            .update({
              email: req.body.email,
            })
            .then(() => {
              return res.redirect('/')
            })
        })
    } else {
      return res.redirect('/')
    }
  } catch (error) {
    res.send(error.message)
  }
}

export { postUser, isExist, modifyEmail }
