const router = require("express").Router();
const db = require("../../models");

router.post("/events", (req, res) => {
  console.log(req.body.eventTitle);
  console.log(req.body.data);
  console.log(req.body.location);
  console.log(req.body.contactPerson);
  console.log(req.body.contactNumber);
  console.log(req.body.description);

  db.Event.create({
    event_name: req.body.eventTitle,
    date: req.body.date,
    address: req.body.location,
    contact_person: req.body.contactPerson,
    contact_number: req.body.contactNumber,
    description: req.body.description,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
      console.log(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
