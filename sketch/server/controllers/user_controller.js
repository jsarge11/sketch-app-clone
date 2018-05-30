const bcrypt = require('bcryptjs')

module.exports = {

 signup: (req, res) => {
  let { email, first_name, last_name, hash } = req.body.user;

  const db = req.app.get('db');

  db.register_user([email, hash, first_name, last_name]).then(() => {
   res.status(200).send()
  }).catch(error=>res.status(500).send(error))
 },

 login: (req, res) => {
  let { email } = req.body.user;
  const db = req.app.get('db');

  db.get_user_by_email([email]).then(user => {
   if (user[0]) {
    res.status(200).send(user[0]);
   }
   else {
    res.status(404).send("Cannot find an account with that email.");
   }
  }).catch(error => res.status(500).send(error))
 },

 read: (req, res) => {
  const db = req.app.get('db');
  db.get_all_users().then(user => {
   res.status(200).send(user);
  })
 },

 //place on session
 session: (req, res) => {
  req.session.user.id = req.body.data.uid;
  req.session.user.first_name = req.body.data.first_name;
  res.status(200).send(req.session.user);
 },

 logout: (req, res) => {
  req.session.destroy;
  res.status(200).send();
 }
}