import database from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite'

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

const postUser = async (postObject) => {
  try {
    const users = await collection(database, 'user')

    await addDoc(users, postObject)
  } catch (error) {
    console.log(error)
  }
}

export { getUser, postUser }
