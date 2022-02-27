const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')
const app = express()
const connectionString= "mongodb+srv://omoshthegeek:<Qwerty2030>@cluster0.lo8h3.mongodb.net/crudapp?retryWrites=true&w=majority"

//body parser
app.use(bodyParser.urlencoded({ extended: true })) 



app.listen(3000, function() {
    console.log('listening on 3000')
  })

  /*app.get('/', function(req, res) {
    res.send('Hello World')
  }) */
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the .
  })

  /*handling post
  app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })*/

  //body parser - hanling form data
  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

  MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })