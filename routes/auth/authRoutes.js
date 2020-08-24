const router = require('express').Router();
const db = require('../../models');

// Route for signing up a user.
// Sequelize User Model. If the user is created successfully, proceed
//  to log the user in, otherwise send back an error
router.post('/signup', (req, res) => {
  console.log(req);
  db.User.create({
    user_name: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get('/role', (req, res) => {
  console.log('hit here');
  db.Role.findAll({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});


module.exports = router;
