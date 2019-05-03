import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  coordinates: function(address) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=405+South+Pearl+Street,+Denver,+CO&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
  }, 

  places: function(lat, lng, radius, type) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
  }, 
  details: function(placeID){
    return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&fields=name,rating,formatted_phone_number&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
  }


};