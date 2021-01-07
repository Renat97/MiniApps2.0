const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.port || 3000;

var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../public/')));

app.use(bodyParser.json());



app.listen(PORT,() => {
  console.log('Server is running');
})

module.exports = app;