import db from '../db'

const getAllArticles = async (req, res) => {
  try {
    const articles = await db.collection('articles').get()
    const articleList = articles.docs.map((doc) => doc.data())
    return articleList
  } catch (error) {
    res.send(error.message)
  }
}

export default getAllArticles
