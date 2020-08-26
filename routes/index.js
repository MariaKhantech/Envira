const router = require("express").Router();
const authRoutes = require("./auth/authRoutes");
const apiRoutes = require("./api/index");
const eventCreateRoutes = require("./api/eventCreateRoutes");

router.use("/", apiRoutes);

router.use("/create", eventCreateRoutes);

router.use("/auth", authRoutes);

module.exports = router;
