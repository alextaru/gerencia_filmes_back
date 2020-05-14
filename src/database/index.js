const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const FilmeModel = require('../models/filmesModel')
const DiretoresModel = require('../models/diretoresModel')

const connection = new Sequelize(dbConfig)

FilmeModel.init(connection)
DiretoresModel.init(connection)

module.exports = connection
