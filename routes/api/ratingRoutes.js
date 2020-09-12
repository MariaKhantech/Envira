const router = require("express").Router();
const db = require("../../models");

router.post("/event", (req, res) => {
  db.Rating.create({
    rating: req.body.rating,
    EventId: req.body.EventId,
    UserId: req.body.UserId,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/userprofile/:UserId/:EventId", (req, res) => {
  db.Rating.findOne({
    where: {
      UserId: req.params.UserId,
      EventId:req.params.EventId
    },
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
