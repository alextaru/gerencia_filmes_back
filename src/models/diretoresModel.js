const { Model, DataTypes } = require('sequelize')

class Diretores extends Model {
  static init (sequelize) {
    super.init({
      nome: DataTypes.STRING
    },
    {
      sequelize
    })
  }
}

module.exports = Diretores
