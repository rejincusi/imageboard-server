const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define(
  'image',
  {
    url: Sequelize.STRING,
    type: Sequelize.STRING
  }
)

module.exports = Image
