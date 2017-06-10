const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var db = require('./db');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
//use below line for postman
//app.use(bodyParser.urlencoded({extended: false}));

const port = 5050;
console.log("listening on port 5050")

app.get('/', (req, res) => {
  console.log('homepage server get')
});

app.post('/saveNote', (req, res) => {
  console.log('server post saveNote ' , req.body)
  db.Notes.create({
    title: req.body.title,
    text: req.body.text
  })
  .then(notes => res.send(notes))
  .catch(error => res.send(error))
})

app.get('/getNotes', (req, res) => {
  db.Notes.findAll()
  .then(notes => res.send(notes))
  .catch(error => res.send(error))
});

app.delete('/deleteNote', (req, res) => {
  db.Notes.destroy({
    where: {
      id : req.body.id
    }
  })
  .then(notes => res.send(201, notes))
  .catch(error => res.send(error))
});

app.post('/updateNote', (req, res) => {
  db.Notes.update(
  {title: req.body.title, text: req.body.text},
  {where: {id: req.body.id}})
  .then(notes => res.send(notes))
  .catch(error => res.send(error))
});

app.listen(port);


