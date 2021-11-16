const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
const host = 'localhost';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/styles/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'styles', 'style.css'));
});
app.get('/scripts/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scripts', 'script.js'));
});

app.listen(port, host, () =>
  console.log(`Server has started on ${host} ${port}`)
);
