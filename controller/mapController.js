const axios = require("axios");

module.exports = {
    placesGet: function(req,res) {
        console.log("Map Controller: ", req.params)
        const { type, lat, lng, radius } = req.params
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
            .then(function(response) {
                res.json(response.data);
            })
            .catch(function(err) {
                console.log("in places get catch");
                
                res.status(500).end();
            })
    }
    // detailsGet:
}