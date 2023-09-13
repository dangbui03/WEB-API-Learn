/*
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express')
const app = express()
const mongoose = require( 'mongoose');
const bodyParser = require( 'body-parser');

const getAllUsers = require('./userController')
app.get('/users', getAllUsers);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config(); // phải có cái này mới dùng đc câu dưới
const port = process.env.PORT || 3000;

app.set('views', './views')
app.set('view engine', 'ejs')

// Kết nối đến cơ sở dữ liệu
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connect to database')) 
  .catch(error => console.error('Connection error:', error));

/*
app.get('/users', (req, res) => {
  var hi_1 = getAllUsers.getAllUsers()
  res.send('test')
})

app.get('/hello/:id', (req, res) => {
  // lấy thông tin người dung có ID đc chỉ định
  res.send("hi user: " + req.params.id)
});

app.get('/hello', (req, res) => { 
  res.send("hello")
})

app.post('/bye', (req, res) => {
  res.send("bye")
})
app.get('/hi', (req,res) => {
  res.render('sample.ejs')
})
*/
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

