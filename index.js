
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const imageRouter = require('./image/router')

app.use(cors())
app.use(bodyParser.json())

app.use(imageRouter)

app.listen(port, () => console.log('Listening to port 4000'))