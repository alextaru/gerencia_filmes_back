const FilmesModel = require('../../models/filmesModel')
const DiretoresModel = require('../../models/diretoresModel')
const AtoresModel = require('../../models/atoresModel')
const { Op } = require('sequelize')

module.exports = {
  async create (req, res) {
    const { titulo, ano, diretor, sinopse, atoresList } = req.body

    const atoresArray = atoresList.toLowerCase().split(',')

    const filme = await FilmesModel.findOne({
      where: { titulo: titulo }
    })

    if (filme) {
      return res.status(400).json({ error: 'filme cadastrado' })
    }

    const [diretores] = await DiretoresModel.findOrCreate({
      where: { nome: diretor }
    })

    const filmes = await FilmesModel.create({
      titulo,
      ano,
      sinopse,
      diretor_id: diretores.id
    })

    if (atoresArray.length) {
      for (const ator of atoresArray) {
        const [atores] = await AtoresModel.findOrCreate({
          where: { nome: ator.trim() }
        })

        await filmes.addAtores(atores)
      }
    } else {
      const [atores] = await AtoresModel.findOrCreate({
        where: { nome: atoresList.toLowerCase().trim() }
      })

      await filmes.addAtores(atores)
    }

    return res.json(filmes)
  },

  async findAll (req, res) {
    const filmes = await FilmesModel.findAll({
      include: [
        { association: 'diretores' }
      ]
    })
    return res.json(filmes)
  },

  async findById (req, res) {
    const { id } = req.params

    const filmes = await FilmesModel.findByPk(id, {
      include: [
        { association: 'atores' },
        { association: 'diretores' }
      ]
    })
    return res.json(filmes)
  },

  async findByTitle (req, res) {
    let { titulo } = req.params
    titulo = titulo + '%'

    const filmes = await FilmesModel.findOne({
      where: { titulo: { [Op.like]: titulo } },
      include: [
        { association: 'atores' },
        { association: 'diretores' }
      ]
    })
    return res.json(filmes)
  },

  async delete (req, res) {
    const { id } = req.params

    const filme = await FilmesModel.destroy({
      where: { id: id }
    })

    if (!filme) {
      return res.status(400).json({ error: 'filme não cadastrado' })
    }

    return res.json({ ok: 'removido' })
  }
}
