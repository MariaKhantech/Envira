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

//this route is to get the logged in user profile details
router.get('/userProfile/:UserId', (req, res) => {
  console.log(req.params.UserId);
  db.UserProfile.findOne({
    where: {
      UserId: req.params.UserId
    }
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

//this route is to save the user profile first time
router.post('/updateUserProfile', (req, res) => {
  console.log(req.body.phoneNumber);
  db.UserProfile.create({
    UserId: req.body.id,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode,
    about: req.body.about,
    phone_number: req.body.phoneNumber,
    occupation:req.body.occupation
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

//this route is to update the user profile
router.put('/updateUserProfile/:UserId', (req, res) => {
  db.UserProfile.update({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode,
    about: req.body.about,
    phone_number: req.body.phoneNumber,
  }, {
    where:
      { UserId: req.params.UserId }
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


// this route is to get logged in user information
router.get('/user/:username', (req, res) => {
  console.log(req.params.username);
  db.User.findOne({
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
