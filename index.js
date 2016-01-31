var express             = require('express')
var mongoose            = require('mongoose')
var bodyParser          = require('body-parser')
var nodeSassMiddleware  = require('node-sass-middleware')
var path                = require('path')
var app                 = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'app/views'))
app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())

app.use(nodeSassMiddleware({
  src: path.join(__dirname, 'app/sass'),
  dest: path.join(__dirname, 'public/css'),
  prefix: '/css',
  indentedSyntax: true,
  sourceMap: true,
  debug: false
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/lib', express.static(path.join(__dirname, 'bower_components')))

require('./app/routes/routes')(app)

app.listen(app.get('port'), function() {
  console.log('Running at localhost:' + app.get('port'))
})
