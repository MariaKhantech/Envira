const router = require("express").Router();
const db = require("../../models");

router.post("/eventsearch", (req, res) => {
  console.log(req.body.rating);
  console.log(req.body.UserId);
  console.log(req.body.EventId);
  db.Rating.create({
    rating: req.body.rating,
    UserId: req.body.UserId,
    EventId: req.body.EventId,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
      console.log(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/eventsearch/:UserId/EventId:", (req, res) => {
  db.Rating.findAll({
    where: {
      UserId: req.params.UserId,
      EventId: req.params.EventId,
    },
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
