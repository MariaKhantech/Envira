const router = require("express").Router();
const db = require("../../models");

router.post("/eventcreate", (req, res) => {

  db.Event.create({
    event_name: req.body.eventName,
    description: req.body.description,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    date: req.body.date,
    website: req.body.website,
    contact_person: req.body.contactPerson,
    contact_email: req.body.contactEmail,
    contact_number: req.body.contactNumber,
    UserId: req.body.id,
    image: req.body.image,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
      console.log(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/eventcreate", (req, res) => {
  db.Event.findAll({})
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
