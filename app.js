const express = require('express');

const app = express();

const port = 3000;
const host = 'localhost';

app.get(
  '/',
  (req, res) => res.send('<h1>Express serv is online</h1>')
  //   console.log('Serv is live')
);

app.listen(port, host, () =>
  console.log(`Server has started on ${host} ${port}`)
);
