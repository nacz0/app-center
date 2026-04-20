const express = require('express');
const app = express();
// Azure dynamicznie przydziela port, więc process.env.PORT jest KLUCZOWY
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Witaj w chmurze Azure!</h1><p>Wdrożenie przez GitHub Actions zakończone sukcesem.</p>');
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});