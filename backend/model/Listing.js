const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ListingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  Occupancy: {
    type: Number,
    required: true
  }, 
  Roommates: {
    type: Array,
    required: false
  }
});
module.exports = Listing = mongoose.model("listings", ListingSchema);