
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://xudaulvt:pd672-uFtD-OdAVSCxqurgrD3ZduXige@pellefant.db.elephantsql.com:5432/xudaulvt')

const Notes = db.define('notes', {
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

Notes.sync();

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  Notes : Notes
};