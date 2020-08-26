const router = require('express').Router();
const db = require('../../models');

// Route for signing up a user.
// Sequelize User Model. If the user is created successfully, proceed
//  to log the user in, otherwise send back an error
router.post('/signup', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.role);

  db.User.create({
    user_name: req.body.username,
    password: req.body.password,
    email: req.body.email,
    RoleId: req.body.role,
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

router.get('/editUserProfile/:id', (req, res) => {
  console.log(req.params.id);
  db.UserProfile.findOne({
    where: req.params.id, // send logged in user id here
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
router.post('/editUserProfile', (req, res) => {
  console.log('hit here');
  db.UserProfile.findAll({

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

router.get('/user/:username', (req, res) => {
  console.log(req.params.username);
  db.User.findOne({
    // send logged in user id here
    where: {
      user_name: req.params.username
    }
  })
    .then((data) => {
      res.json(data);
      console.log(data)
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});
module.exports = router;
