const { Model, DataTypes } = require('sequelize')

class Atores extends Model {
  static init (sequelize) {
    super.init({
      nome: DataTypes.STRING
    },
    {
      sequelize
    })
  }

  static associate (models) {
    this.belongsToMany(models.Filmes, { foreignKey: 'ator_id', through: 'filmes_atores', as: 'filmes' })
  }
}

module.exports = Atores
