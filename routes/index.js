const router = require("express").Router();
const authRoutes = require("./auth/authRoutes");
const apiRoutes = require("./api/index");

router.use("/", apiRoutes);

router.use("/create", eventSearchRoutes);

router.use("/auth", authRoutes);

module.exports = router;
