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

app.all('/methods', (req, res) => {
  console.log(req.method);
  console.log(req.ips);
  console.log(req.ip);
  console.log(req.path);
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.protocol);
  console.log(req.secure);
  console.log(req.hostname);

  res.send(
    `Methods ${req.method}, ${req.ips}, ${req.ip}, ${req.path}, ${req.url}, ${req.originalUrl}, ${req.protocol}, ${req.secure}, ${req.hostname}`
  );
});

app.listen(port, host, () =>
  console.log(`Server has started on ${host} ${port}`)
);
