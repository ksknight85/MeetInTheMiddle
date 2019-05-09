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
        // console.log(`details: \n\n\n${req.params.placeId}`)
        const placeId = req.params.placeId
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,photo,url,type,rating,formatted_phone_number,address_component&key=${keys.google.apikey}`)
            .then(function(details){
                // console.log(`details: \n\n ${details.data.result.name}`);
                res.json(details.data.result)

            })
    },
    coordinatesGet: function(req,res) {
        console.log(`cooords!!!!! \n\n\n${req.params.place}`)
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.place}&key=${keys.google.apikey}`)
        .then(function(details){
            console.log(`details: \n\n ${details.data.results}`);
            res.json(details.data)

        })
    }
}