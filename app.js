var express = require('express')
var app = express()
var routes = require('./routes')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('/', routes)

app.listen(8888, function () {
  console.log('🌎 JavaScript 101 website is running at http://0.0.0.0:8888')
})
