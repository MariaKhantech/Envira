const router = require("express").Router();
const authRoutes = require("./auth/authRoutes");
const apiRoutes = require("./api/index");
const eventSearchRoutes = require("./api/eventSearchRoutes");

router.use("/", apiRoutes);

router.use("/create", eventSearchRoutes);

router.use("/auth", authRoutes);

module.exports = router;
