const bcrypt = require('bcryptjs')

module.exports = {
 signup: (req, res) => {
  let { email, username, hash } = req.body;
  // add user to database
  // on success vvv

  res.status(200).send( req.body )
 },
 login: (req, res) => {
  let { username } = req.body;
  // checks if username exists in db, if so, send back hash.
  let user = {
   hash: "$2a$10$SqVdnVyHSE8y4HA/M4lxHuV5BmO2c3gSr0loFrz1S6Ks2t0gngSy6"
  }
  res.status(200).send(user);
  
 }
}