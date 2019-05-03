const router = require("express").Router();
const addressController = require("../../controller/addressController")

router.route("/:id")
  .post(addressController.create)

module.exports = router  