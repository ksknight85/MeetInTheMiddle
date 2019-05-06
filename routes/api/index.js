const router = require("express").Router();
const userRoutes = require("./userRoutes");
const addressRoutes= require("./addressRoutes");
const mapRoutes = require("./mapRoutes")

router.use("/address", addressRoutes)
router.use("/users", userRoutes);
router.use("/place", mapRoutes)

module.exports = router;
