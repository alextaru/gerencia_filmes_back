const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const BaseRouter = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', BaseRouter)

module.exports = app
