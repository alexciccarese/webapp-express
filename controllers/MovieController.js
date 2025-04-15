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

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    if (results === 0) return res.status(404).json({ error: 'Movie not found' })

    const movie = results[0]

    res.json(movie)
  })
}

module.exports = {
  index,
  show
}

