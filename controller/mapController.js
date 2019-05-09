const axios = require("axios");
const keys = require("../keys")
console.log(keys)
module.exports = {
    placesGet: function(req,res) {
        const { type, lat, lng, radius } = req.params
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${keys.google.apikey}`)
            .then(function(response) {
                res.json(response.data);
            })
            .catch(function(err) {
                console.log("in places get catch");
                
                res.status(500).end();
            })

    },
    detailsGet: function(req,res) {
        const placeId = req.params.placeId
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,photo,url,type,rating,formatted_phone_number,address_component&key=${keys.google.apikey}`)
            .then(function(details){
                res.json(details.data.result)

            })
    },
    coordinatesGet: function(req,res) {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.place}&key=${keys.google.apikey}`)
        .then(function(details){
            res.json(details.data)

        })
    }
}