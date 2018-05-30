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

// sketchpad control
app.post('/api/pads', pad_ctrl.addPad)
app.get('/api/pads', pad_ctrl.getAllPads)
app.get('/api/pads/:id', pad_ctrl.getPad)
app.put('/api/pads/:id', pad_ctrl.editPad)
app.delete('/api/pads/:id', pad_ctrl.deletePad)

// element control
app.post('/api/pads/:id/elements', ele_ctrl.addElement)
app.get('/api/pads/:id/elements/:key', ele_ctrl.getElement)
app.get('/api/pads/:id/elements', ele_ctrl.getAllElements)
app.put('/api/pads/:id/elements/:key', ele_ctrl.editElement)
app.delete('/api/pads/:id', ele_ctrl.deleteElement)



massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, ()=>console.log(`Listening on ${SERVER_PORT}`))
})
