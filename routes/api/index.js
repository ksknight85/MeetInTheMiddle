const router = require("express").Router();
const userRoutes = require("./userRoutes");
const addressRoutes= require("./addressRoutes")

router.use("/address", addressRoutes)
router.use("/users", userRoutes);

module.exports = router;
