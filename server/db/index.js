// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
const Sequelize = require('sequelize')

const db = new Sequelize('notes', 'root', '1111', {
  dialect: 'mysql'
});

//database already exists, just connect to it 

const Note = db.define('Note', {
  //Define a collumn in the table
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

Note.sync();


db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = Note;