var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var addressSchema = new Schema({
  // `title` is required and of type String
  address: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  // username: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Users"
  // }
});

// This creates our model from the above schema, using mongoose's model method
var Address = mongoose.model("Address", addressSchema);

// Export the Article model
module.exports = Address;