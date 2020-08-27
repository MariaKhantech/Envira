const router = require("express").Router();
const db = require("../../models");

router.post("/eventcreate", (req, res) => {
  console.log(req.body.eventTitle);
  console.log(req.body.data);
  console.log(req.body.location);
  console.log(req.body.contactPerson);
  console.log(req.body.contactNumber);
  console.log(req.body.description);
  // USED ID WILL NOT BE NEEDED
  console.log(req.body.userId);

  db.Event.create({
    event_name: req.body.eventTitle,
    date: req.body.date,
    address: req.body.location,
    contact_person: req.body.contactPerson,
    contact_number: req.body.contactNumber,
    description: req.body.description,
    UserId: req.body.userId,
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
