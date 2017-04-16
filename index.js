const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.all('/', (req, res) => {
    res.sendStatus(405);
});

app.listen(8888);

function jozsi(a) {
    if (a === 0) {
        console.log('one');
    } else if (a === 1) {
        console.log('two');
    } else if (a === 2) {
        console.log('three');
    } else if (a === 3) {
        console.log('four');
    } else if (a === 4) {
        console.log('five');
    } else if (a === 5) {
        console.log('five');
    } else if (a === 6) {
        console.log('five');
    }
}

jozsi(1);
jozsi(2);
jozsi(3);
jozsi(4);
jozsi(5);
jozsi(6);


module.exports = app;
