const app = require('./App')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

require('./database')

const PORT = Number(process.env.PORT || 3000)
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log('Express server started on port: ' + PORT)
})
