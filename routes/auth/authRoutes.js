const router = require('express').Router();
const db = require('../../models');

// Route for signing up a user.
router.post('/signup', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.role);

  db.User.create({
    user_name: req.body.username,
    email: req.body.email,
    roleId: req.body.role,
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
  console.log()
  db.UserProfile.create({
    UserId: req.body.id,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode ? parseInt(req.body.zipCode) : null,
    about: req.body.about,
    phone_number: req.body.phoneNumber,
    occupation: req.body.occupation
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
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
    occupation: req.body.occupation
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

//this route is to get the logged in company profile details
router.get('/companyProfile/:UserId', (req, res) => {
  console.log(req.params.UserId);
  db.CompanyProfile.findOne({
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

//this route is to save the company profile first time
router.post('/updateCompanyProfile', (req, res) => {
  db.CompanyProfile.create({
    UserId: req.body.id,
    company_name: req.body.companyName,
    company_description: req.body.description,
    email: req.body.email,
    website: req.body.website,
    contact_person: req.body.contactPersonName,
    environmental_focus: req.body.environmentalFocus,
    phone_number: req.body.phoneNumber,

  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err.message);
        console.log(err)
      }
    });
});

//this route is to update the company profile
router.put('/updateUserProfile/:UserId', (req, res) => {

  db.CompanyProfile.update({
    company_name: req.body.companyName,
    company_description: req.body.description,
    email: req.body.email,
    website: req.body.website,
    contact_person: req.body.contactPersonName,
    environmental_focus: req.body.environmentalFocus,
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
        console.log(err)
      }
    });
});

//this route is to get the logged in user event details
router.get('/userTotalEvent/:UserId', (req, res) => {
  console.log(req.params.UserId);
  db.Event.findAll({
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

// this route is to save the profile image for logged in user into image model
router.post('/image', (req, res) => {
  console.log(req.body.selectedFileName)
  console.log(req.body.UserId)
  db.Image.create({
    image_name: req.body.selectedFileName,
    UserId: req.body.UserId
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err)
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

// this route is to get the profile image for logged in user
router.get('/image/:UserId', (req, res) => {
  console.log(req.params.UserId)
  db.Image.findOne({
    where: {
      UserId: req.params.UserId
    }
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err)
      if (err) {
        res.status(500).json(err.message);
      }
    });
});



module.exports = router;
