const dotenv = require('dotenv')
const path = require('path')

if (!process.env.DB_HOTS) {
  dotenv.config({ path: path.resolve(__dirname, '../../.env') })
}

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOTS,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'filmes',
  define: {
    timestamps: true,
    underscored: true
  }
}
