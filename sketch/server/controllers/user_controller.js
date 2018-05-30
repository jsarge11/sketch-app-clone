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
   res.status(200).send(user[0].password);
  }).catch(error => res.status(500).send(error))
 },
 read: (req, res) => {
  const db = req.app.get('db');
  db.get_all_users().then(user => {
   res.status(200).send(user);
  })
 }
}