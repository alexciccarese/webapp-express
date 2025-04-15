const connection = require("../database/db")

function index(req, res) {
  res.json({ message: 'List of MOvies' })
}

function show(req, res) {
  const { id } = req.params
  res.json({ message: `List of movies by id: ${id}` })
}

module.exports = {
  index,
  show
}

