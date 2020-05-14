const { Router } = require('express')
const FilmesRouter = require('./app/routes/filmesRouter')

const router = Router()

router.use('/filmes', FilmesRouter)

module.exports = router
