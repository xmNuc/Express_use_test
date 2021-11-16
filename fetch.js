fetch('http://localhost:3000', { method: 'DELETE' })
  .then((data) => data.text())
  .then((text) => console.log(text));
