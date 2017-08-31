const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const {
  getAll,
  addChar,
  findChar,
  deleteChar
} = require('./dal')
const app = express() // builds express app

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views') //builds mustache app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
})) // id's info to parse

app.get('/players', (req, res) => {
  getAll().then(function(players) {
    res.render('./list', {players})
  })
})


app.post('/newPlayer', (req, res) => {
  addChar(req.body).then(function() {
    res.send("it worked");
  })
})

app.get('/newPlayer', (req, res) => {
  res.render('./newPlayer');
})

app.post('/delPlayer/:id', (req, res) => {
  deleteChar(req.params.id).then(function() {
    // res.redirect('./list', {players});
    res.send('he gone')
  })
})

app.listen(3000, function () {
  console.log('you feel the flows of saidar course through your veins! Success!')
})
