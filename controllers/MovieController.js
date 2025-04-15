const connection = require("../database/db")

function index(req, res) {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message })

    res.json(results)
  })
}

function show(req, res) {
  const { id } = req.params
  res.json({ message: `List of movies by id: ${id}` })
}

module.exports = {
  index,
  show
}

