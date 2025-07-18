const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const PORT = 3000;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send(' Morgan is logging to access.log file!');
});
app.get('/about', (req, res) => {
  res.send(' solurathuku onnum illa!');
});
app.get('/home', (req, res) => {
  res.send(' simply waste!');
});
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
