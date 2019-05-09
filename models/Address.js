var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var addressSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Address = mongoose.model("Address", addressSchema);

// Export the Article model
module.exports = Address;