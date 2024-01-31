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
app.get(`/circle`, (req, res)=> {
  console.log(req.query)
  res.render(`circle.njk`, req.query);
});
app.post(`/circle`, (req, res)=> {
  res.json(req.body);
});
app.get(`/circle`, (req, res)=> {
  let area = Math.PI * req.body.radiuse
  res.render(`circleAnswere.njk`, {r: req.body.radiuse, a: area });
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});