module.exports = {
 check: (req, res, next) => {
  if (!req.session.user) {
   req.session.user = {
    first_name: '',
    id: 0,
   }
  }

  next();
 }
}