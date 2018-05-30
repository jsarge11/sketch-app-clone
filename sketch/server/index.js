const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive')
      user_ctrl = require('./controllers/user_controller')
require('dotenv').config();

let app = express();
app.use(bodyParser.json())

let {
 SERVER_PORT,
 CONNECTION_STRING
} = process.env

//user control
app.post('/user/signup', user_ctrl.signup)
app.post('/user/login', user_ctrl.login)
app.get('/user/get', user_ctrl.read)


massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, ()=>console.log(`Listening on ${SERVER_PORT}`))
})
