const Sequelize = require('sequelize')
const DATABASE_URL  = 'postgres://postgres:pass1@localhost:5432/postgres'

const db = new Sequelize(DATABASE_URL)

db
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = db