const router = require("express").Router();
const addressController = require("../../controller/addressController")

router.route("/:id")
  .post(addressController.create)
  .delete(addressController.remove)

module.exports = router  