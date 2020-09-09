const router = require("express").Router();
const db = require("../../models");

router.post("/event", (req, res) => {
  console.log(req.body.rating);

  db.Rating.create({
    rating: req.body.rating,
    EventId: req.body.EventId,
    UserId: req.body.UserId,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
      console.log(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/userprofile/:UserId", (req, res) => {
  db.Rating.findAll({
    where: {
      UserId: req.params.UserId,
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
