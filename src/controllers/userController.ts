import database from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'

const getUser = async (req, res, next) => {
  try {
    const users = await collection(database, 'user')
    const usersData = await getDocs(users)
    const userList = usersData.docs.map((doc) => doc.data())
    return userList
  } catch (error) {
    res.send(error)
  }
}

const createUser = async (req, res, next) => {
  try {
    const users = await collection(database, 'user')
    const usersData = await getDocs(users)
    const userList = usersData.docs.map((doc) => doc.data())
    return userList
  } catch (error) {
    res.send(error)
  }
}

export { getUser, createUser }
