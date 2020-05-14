const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const FilmeModel = require('../models/filmesModel')
const DiretoresModel = require('../models/diretoresModel')
const AtoresModel = require('../models/atoresModel')

const connection = new Sequelize(dbConfig)

FilmeModel.init(connection)
DiretoresModel.init(connection)
AtoresModel.init(connection)

FilmeModel.associate(connection.models)
AtoresModel.associate(connection.models)

module.exports = connection
