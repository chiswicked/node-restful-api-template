const express = require('express');
const db = require('./tools/db');
const Rule = require('./models/rule').Rule;

db.connect('mongodb://localhost:27017/mydb', (err) => {
  if (err) {
    console.log('unable to connect to the database');
    throw (err);
  }
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/rules', (req, res) => {
  Rule.all((err, tasks) => {
    res.send(tasks);
  });
});

app.all('/', (req, res) => {
  res.sendStatus(405);
});


app.listen(8888, () => {
  console.log('listening on 8888');
});

module.exports = app;
