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
  //saves address
  postAddress: function(id, address) {
    return axios.post("/api/address/" +id, address);
  },
  //deletes address
  deleteAddress: function(id) {
    return axios.delete("/api/address/" +id)
  },
  //updates address
  updateAddress: function(id, address) {
    return axios.put("/api/address/" + id, address)
  },
  // gets all address for a user
  getAll: function (id) {
    return axios.get("/api/address/"+ id)
  },
  //gets coords for current formatted addresses
  coordinates: function(address) {
     let formatted = address.split(" ").join("+")
    return axios.get(`/api/place/coords/${formatted}`)
  }, 
  // finds relevent places
  places: function(type, lat, lng, radius) {
    return axios.get(`/api/place/${type}/${lat}/${lng}/${radius}`)
  }, 
  //details about each place
  details: function(placeId){
    return axios.get(`/api/place/${placeId}`)
  }
};