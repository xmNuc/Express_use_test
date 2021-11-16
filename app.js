const express = require('express');

const app = express();

const port = 3000;
const host = 'localhost';

app.all('/', (req, res) => {
  res.send(`<h1>Express serv is online ${req.method}</h1>`);
});

app.listen(port, host, () =>
  console.log(`Server has started on ${host} ${port}`)
);
