

const notFound = (req, res, next) => {
  res.status(404).send('Sorry, route does not exist')
}

module.exports = notFound