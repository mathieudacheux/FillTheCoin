import express from 'express'
import database from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'

const appExpress = express()

const userGet = async (req, res, next) => {
  try {
    const users = await collection(database, 'user')
    const usersData = await getDocs(users)
    const usersList = usersData.docs.map((doc) => doc.data())
    return usersList
    // res.status(200).json(usersList)
  } catch (error) {
    res.send(error)
  }
}

const userPost = appExpress.post('/user', async (req, res) => {
  try {
    const users = await collection(database, 'user')
    const usersData = await getDocs(users)
    const usersList = usersData.docs.map((doc) => doc.data())
    res.status(200).json(usersList)
    return usersList
  } catch (error) {
    res.send(error)
  }
})

export { userGet, userPost }
