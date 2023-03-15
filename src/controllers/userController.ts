import db from '../db'
import UserType from '../models/user'

const postUser = async (req, res) => {
  try {
    const userJson: UserType = {
      mail: req.body.mail,
      password: req.body.password,
    }
    const response = db.collection('user').doc().set(userJson)
    res.status(201).send(response)
  } catch (error) {
    res.send(error.message)
  }
}

export default postUser
