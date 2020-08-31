const router = require("express").Router();
const authRoutes = require("./auth/authRoutes");
const apiRoutes = require("./api/index");
const eventCreateRoutes = require("./api/eventCreateRoutes");
const ratingRoutes = require("./api/ratingRoutes");

router.use("/", apiRoutes);

router.use("/rate", ratingRoutes);

router.use("/create", eventCreateRoutes);

router.use("/auth", authRoutes);

module.exports = router;
