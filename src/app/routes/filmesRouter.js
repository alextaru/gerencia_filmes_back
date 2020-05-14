const { Router } = require('express')
const FilmesController = require('../controllers/filmesController')

const router = Router()

router.post('', FilmesController.create)
router.get('/all', FilmesController.findAll)
router.get('/:id', FilmesController.findById)
router.get('/titulo/:titulo', FilmesController.findByTitle)
router.delete('/:id', FilmesController.delete)

module.exports = router
