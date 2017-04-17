const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.all('/', (req, res) => {
  res.sendStatus(405);
});

app.listen(8888);

module.exports = app;
