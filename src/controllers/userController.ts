import db from '../db'
import UserType from '../models/user'
import { genSalt, hash, compare } from 'bcrypt'
import admin from 'firebase-admin'
import getAllEstate from './estateController'

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
    const response = db
      .collection('user')
      .doc(user.uid)
      .set({ ...userJson, id: user.uid })
    req.session.idUser = user.uid
    res.status(201).send({ message: 'created', response: response })
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
      res.status(404).send({ message: 'Authentification failed' })
    } else {
      req.session.idUser = user.docs[0].data().id
      console.log(req.session)

      res.status(200).send({ message: 'Authentificated' })
      const estates = await getAllEstate(req, res)
      return res.redirect('/landingpage', { estates, connected: true })
    }
  } catch (error) {
    res.send(error.message)
  }
}

export { postUser, isExist }
