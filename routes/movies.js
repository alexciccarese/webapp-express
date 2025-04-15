const router = require('express').Router()
const MovieController = require('../controllers/MovieController')


//index 
router.get('/', MovieController.index)

//show
router.get('/:id', MovieController.show)


module.exports = router