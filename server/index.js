const express = require('express');
const app = express()

const serveJudge = (req, res, next) => {
  res.send('<h1>Judgement Day.</h1>')
}

const serveSleep = (req, res, next) => {
  res.send(`<h2>Sleepy tiem</h2>`)
}

const serveColor = (req, res, next) => {
  const { name, coolColor } = req.query;
  res.send(`hello ${name}, your cool color is ${coolColor}`)
}
const serveSins = (req, res, next) => {
  const data = [{ sin: 'Wrath' }, { sin: 'Envy' }, { sin: 'Lust' }, { sin: 'Sloth' }, { sin: 'Greed' }, { sin: 'Pride' }, { sin: 'Gluttony' }];
  res.send(data);
}

app.get('/sleepy', serveSleep)
app.get('/', serveJudge)
app.get('/api/color', serveColor);
app.get('/api/sins', serveSins);


const PORT = 1747;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})