import db from '../db'

const getAllEstate = async (req, res) => {
  try {
    const estates = await db.collection('estates').get()
    const estateList = estates.docs.map((doc) => doc.data())
    return estateList
  } catch (error) {
    res.send(error.message)
  }
}

export default getAllEstate
