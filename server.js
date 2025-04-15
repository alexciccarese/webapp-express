const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3004
const movieRoutes = require('./routes/movies')

//middleware
app.use(cors(
  {
    origin: process.env.FRONT_URL || 'http://localhost:5173'
  }
))


app.use(express.json())

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

})


// primary route
app.get('/', (req, res) => {
  res.send('Movies API server')
})


// use movie router
app.use('/api/movies', movieRoutes)


//500 server error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
  
})

//404 error
app.use((req, res, next) => {
  res.status(404).send('Sorry, route does not exist')
})