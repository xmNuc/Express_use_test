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
  console.log(req.query);
  console.log(req.query.as);
  console.log(req.params);

  res.send(
    `Methods ${req.method}, ${req.ips}, ${req.ip}, ${req.path}, 
    ${req.url}, ${req.originalUrl}, ${req.protocol}, ${req.secure}, ${req.hostname}, ${req.query}`
  );
});

app.all('/methods/:idCountry/:idLanguage', (req, res) => {
  console.log(req.params);
  const { idCountry, idLanguage } = req.params;

  res.send(
    `Methods: ${req.params}, Country ${idCountry}, language ${idLanguage}`
  );
});
app.get('/app/:math', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { math } = req.params;
  const { value1, value2 } = req.query;

  let result = null;

  if (math === 'add') {
    result = Number(value1) + Number(value2);
  }
  if (math === 'subtract') {
    result = Number(value1) - Number(value2);
  }
  if (math === 'multiply') {
    result = Number(value1) * Number(value2);
  }

  res.send(`Math ${typeof result === 'number' ? result.toFixed(2) : result}`);

  //http://localhost:3000/app/add?value1=10&value2=5
  //http://localhost:3000/app/subtract?value1=10&value2=5
  //http://localhost:3000/app/multiply?value1=10&value2=5
});

app.listen(port, host, () =>
  console.log(`Server has started on ${host} ${port}`)
);
