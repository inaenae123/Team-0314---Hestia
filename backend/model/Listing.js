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
  },
  price: {
    type: Number,
    required: true
  },
  totalRatingSum: {
    type: Number,
    default : 0
  },
  numRatings: {
    type: Number,
    default : 0
  }
});
module.exports = Listing = mongoose.model("listings", ListingSchema);