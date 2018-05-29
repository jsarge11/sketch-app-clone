const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive')
      user_ctrl = require('./controllers/user_controller')
require('dotenv').config();

let app = express();
app.use(bodyParser.json())

let {
 SERVER_PORT
} = process.env

//user control
app.post('/user/signup', user_ctrl.signup)
app.get('/user/login', user_ctrl.login)

app.listen(SERVER_PORT, ()=>console.log(`Listening on ${SERVER_PORT}`))