const router = require("express").Router();
const db = require("../../models");

router.post("/eventcreate", (req, res) => {
  console.log(req.body.eventName);
  console.log(req.body.description);
  console.log(req.body.address);
  console.log(req.body.city);
  console.log(req.body.state);
  console.log(req.body.date);
  console.log(req.body.website);
  console.log(req.body.contactPerson);
  console.log(req.body.contactEmail);
  console.log(req.body.contactNumber);
  console.log(req.body.id);
  console.log(req.body.image);

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
