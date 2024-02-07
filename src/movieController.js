const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/', (req, res) => {
    //fs.appendFileSync('test.txt', 'hello');
    let text = fs.readFileSync('test.txt', 'utf-8');
    let movies = text.split('\n');
    movies.splice(-1);
    res.render('movies/index.njk',{text: text});
});

router.get('/add', (req, res) => {
    fs.appendFileSync('test.txt', 'hello\n');
    res.redirect('/movies/');
});

module.exports = router;