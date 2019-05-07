const axios = require("axios");

module.exports = {
    placesGet: function(req,res) {
        // console.log(req.params)
        const { type, lat, lng, radius } = req.params
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
            .then(function(response) {
                res.json(response.data);
            })
            .catch(function(err) {
                res.status(500).end();
            })
    },
    detailsGet: function(req,res) {
        // console.log(`details: \n\n\n${req.params.placeId}`)
        const placeId = req.params.placeId
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,photo,url,type,rating,formatted_phone_number,address_component&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
            .then(function(details){
                // console.log(`details: \n\n ${details.data.result.name}`);
                res.json(details.data.result)

            })
    }
    // detailsGet:
}