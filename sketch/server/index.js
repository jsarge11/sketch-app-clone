const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive')
      user_ctrl = require('./controllers/user_controller'),
      check = require('./middleware/checkForSession').check
require('dotenv').config();

let app = express();
app.use(bodyParser.json())

let {
 SERVER_PORT,
 CONNECTION_STRING,
 SECRET_SESSION
} = process.env

app.use(session( {
      resave: true,
      saveUninitialized: false,
      secret: SECRET_SESSION,
      cookie: {
            maxAge: 100000 
      }
}))

app.use(check);

//user control
app.get('/user/get', user_ctrl.read)
app.post('/user/signup', user_ctrl.signup)
app.post('/user/login', user_ctrl.login)
app.post('/user/session', user_ctrl.session)


massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, ()=>console.log(`Listening on ${SERVER_PORT}`))
})
