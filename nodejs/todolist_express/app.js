const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Helloworld');
});

app.listen(3000, () => {
  console.log("Running server");
});
