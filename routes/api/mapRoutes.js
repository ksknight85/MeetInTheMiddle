const router = require("express").Router();
const mapController = require("../../controller/mapController");


// the route pattern below is assuming that this code is in the index.js INSIDE your /routes/api folder
// to hit this route, you'd make an axios.get() to the following url pattern: /api/places?lat=39.70922&lng=-104.980389&radius=5000&type=restaurant
router.route("/:type/:lat/:lng/:radius")
    .get(mapController.placesGet)

module.exports = router