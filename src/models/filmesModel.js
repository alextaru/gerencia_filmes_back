const { Model, DataTypes } = require('sequelize')

class Filmes extends Model {
  static init (sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      sinopse: DataTypes.STRING
    },
    {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Diretores, { foreignKey: 'diretor_id', as: 'diretores' })
    this.belongsToMany(models.Atores, { foreignKey: 'filme_id', through: 'filmes_atores', as: 'atores' })
  }
}

module.exports = Filmes
