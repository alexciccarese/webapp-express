const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.port || 3004

//middleware
app.use(cors(
  {
    origin: process.env.FRONT_URL || 'htthttp://localhost:5173'
  }
))


app.use(express.json())

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

})


// routes
app.get('/', (req, res) => {
  res.send('Movies API server')
})


//index 
app.get('/', (req, res) => {

  res.json({ message: 'List of movies' })
})

//show
app.get('/:id', (req, res) => {

  const { id } = req.params
  res.json({ message: `List of movies by id:${id}` })
})



//500 server error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
  
})

//404 error
app.use((req, res, next) => {
  res.status(404).send('Sorry, route does not exist')
})