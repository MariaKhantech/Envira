const router = require("express").Router();
var Sequelize = require("sequelize");
const db = require("../../models");

// Route for signing up a user.
router.post("/signup", (req, res) => {
  db.User.create({
    user_name: req.body.username,
    email: req.body.email,
    roleId: req.body.role,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch(Sequelize.ValidationError, (err) => {
      // respond with validation errors
      res.status(422).send(err.errors);
    })
    .catch((err) => {
      res.json(err);
    });
});

//this route is to get the logged in user profile details
router.get("/userProfile/:UserId", (req, res) => {
  db.UserProfile.findOne({
    where: {
      UserId: req.params.UserId,
    },
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
router.post("/updateUserProfile", (req, res) => {
  db.UserProfile.create({
    UserId: req.body.id,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode ? parseInt(req.body.zipCode) : null,
    about: req.body.about,
    phone_number: req.body.phoneNumber,
    occupation: req.body.occupation,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

//this route is to update the user profile
router.put("/updateUserProfile/:UserId", (req, res) => {
  db.UserProfile.update(
    {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zipCode,
      about: req.body.about,
      phone_number: req.body.phoneNumber,
      occupation: req.body.occupation,
    },
    {
      where: { UserId: req.params.UserId },
    }
  )
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
router.get("/user/:username", (req, res) => {
  db.User.findOne({
    where: {
      user_name: req.params.username,
    },
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

router.get("/userid/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
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

//this route is to get the logged in company profile details
router.get("/companyProfile/:UserId", (req, res) => {
  db.CompanyProfile.findOne({
    where: {
      UserId: req.params.UserId,
    },
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
router.post("/updateCompanyProfile", (req, res) => {
  db.CompanyProfile.create({
    UserId: req.body.id,
    company_name: req.body.companyName,
    company_description: req.body.description,
    email: req.body.email,
    website: req.body.companyWebsite,
    contact_person: req.body.contactPersonName,
    environmental_focus: req.body.environmentalFocus,
    phone_number: req.body.phoneNumber,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

//this route is to update the company profile
router.put("/updateCompanyProfile/:UserId", (req, res) => {
  db.CompanyProfile.update(
    {
      company_name: req.body.companyName,
      company_description: req.body.description,
      email: req.body.email,
      website: req.body.website,
      contact_person: req.body.contactPersonName,
      environmental_focus: req.body.environmentalFocus,
      phone_number: req.body.phoneNumber,
    },
    {
      where: { UserId: req.params.UserId },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
        res.status(404).json(err);
      }
    });
});

//this route is to get the logged in user event details
router.get("/userTotalEvent/:UserId", (req, res) => {
  db.Event.findAll({
    where: {
      UserId: req.params.UserId,
    },
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
router.post("/image", (req, res) => {
  db.Image.create({
    image_name: req.body.selectedFileName,
    UserId: req.body.UserId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

// this route is to update the profile image for logged in user into image model
router.put("/image/:UserId", (req, res) => {
  db.Image.update(
    {
      image_name: req.body.selectedFileName,
    },
    {
      where: {
        UserId: req.params.UserId,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

// this route is to get the profile image for logged in user
router.get("/image/:UserId", (req, res) => {
  db.Image.findOne({
    where: {
      UserId: req.params.UserId,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err.message);
      }
    });
});

// route to post event attendees
router.post("/joinevent", (req, res) => {
  console.log(req.body.UserId);
  db.EventAttendee.create({
    UserId: req.body.UserId,
    EventId: req.body.EventId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        res.status(500).json(err);
      }
    });
});

// route to post event attendees
router.get('/joinevent/:UserId/:EventId', (req, res) => {
  console.log(req.body.UserId)
  db.EventAttendee.findOne({
    where: {
      UserId: req.params.UserId,
      EventId:req.params.EventId
    }
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err)
      if (err) {
        res.status(500).json(err);
      }
    });
});

module.exports = router;
