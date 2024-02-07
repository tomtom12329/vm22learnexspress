const express = require('express');
const nunjucks = require(`nunjucks`);
const app = express();
const port = 3000;

app.use(express.urlencoded({
  extended:true
}))
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/', (req, res) => {
  res.render('index.njk');
  //console.log (`somebody visited`);
});
app.get(`/page2`, (req, res)=> {
    res.render(`page2.njk`);
});
app.get(`/form`, (req, res)=> {
  console.log(req.query)
  res.render(`form.njk`, req.query);
});
app.get('/circle', (req, res) => {
  res.render('circle.njk');
});


app.post('/circle', (req, res) => {
  if (!req.body.radius || isNaN(req.body.radius)) {
    return res.status(400).send('Invalid radius value');
  }

  const radius = parseFloat(req.body.radius);
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  const volume =  (4/3) * Math.PI * radius * radius * radius 

  res.render('circleAnswer.njk', { r: radius, a: area, c: circumference, volume: volume });
});

const movieController = require('./src/movieController.js')
app.use('/movies', movieController);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});