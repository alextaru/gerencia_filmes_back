const { Router } = require('express')
const FilmesController = require('../controllers/filmesController')

const router = Router()

router.post('', FilmesController.create)

module.exports = router
