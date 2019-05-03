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

  postAddress: function(id, address) {
    console.log(id);
    return axios.post("/api/address/" +id, address);
  },
  deleteAddress: function(id) {
    console.log(id)
    return axios.delete("/api/address/" +id)
  },

  coordinates: function(address) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
  }, 

  places: function(lat, lng, radius, type) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE`)
  }, 



};