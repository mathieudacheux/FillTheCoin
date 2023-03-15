import db from '../db'

const getAllCities = async (req, res) => {
  try {
    const articles = await db.collection('cities').get()
    const articleList = articles.docs.map((doc) => doc.data())
    return articleList
  } catch (error) {
    res.send(error.message)
  }
}

export default getAllCities
