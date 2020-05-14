const FilmesModel = require('../../models/filmesModel')

module.exports = {
  async create (req, res) {
    const { titulo } = req.body
    console.log(titulo)

    const filmes = await FilmesModel.create({ titulo })

    return res.json(filmes)
  }
}
