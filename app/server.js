'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/aboutus', (req, res) => {
  res.send('aboutus');
});


app.get('/product/1', (req, res) => {
  res.send('product1');
});


app.get('/product', (req, res) => {
  res.send('<html><body>list of products <p><li>1</li> <li> 2</li></p></body></html>');
});

app.listen(PORT);
console.log("hello world");
