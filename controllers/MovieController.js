const connection = require("../database/db")

function index(req, res) {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message })

    res.json(results)
  })
}

function show(req, res) {
  const id = Number(req.params.id)

  const sql = 'SELECT * FROM movies WHERE id = ?'
  const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    if (results.length === 0) return res.status(404).json({ error: 'Movie not found' })

    const movie = results[0]

    connection.query(sqlReviews, [id], (err, reviews) => {
      if (err) return res.status(500).json({ error: err.message })
      movie.reviews = reviews
      console.log(movie.reviews);

      res.json(movie)
    })

  })
}


function storeReview(req, res) {

  const id = Number(req.params.id)
  const { name, review, vote } = req.body

  const text = review
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
  const updated_at = created_at

  const insertSql = 'INSERT INTO reviews (movie_id, name, text, vote, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [id, name, text, vote, created_at, updated_at];

  connection.query(insertSql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message })


    console.log(results);
    res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId })
  })

}

module.exports = {
  index,
  show,
  storeReview
}

