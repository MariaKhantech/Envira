const router = require('express').Router();
const db = require('../../models');

// Route for signing up a user.
// Sequelize User Model. If the user is created successfully, proceed
//  to log the user in, otherwise send back an error
router.post('/signup', (req, res) => {
  let Id;
  console.log(req.body.username);
  console.log(req.body.role);
  if (req.body.role === 'company') {
    Id = 2;
  } else if (req.body.role === 'individual user') {
    Id = 1;
  } else if (req.body.role === 'non-profit') {
    Id = 3;
  }
  db.User.create({
    user_name: req.body.username,
    password: req.body.password,
    email: req.body.email,
    RoleId: Id,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
      console.log(dbResponse);
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

router.get('/editUserProfile', (req, res) => {
  console.log('hit here');
  db.UserProfile.findOne({
    where: req.params.Id, // send logged in user id here
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});

router.get('/user', (req, res) => {
  console.log('hit here');
  db.User.findOne({
    where: req.params.Id, // send logged in user id here
  })
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
