const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ListingSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
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
  policies: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  bed: {
    type: Number,
    required: false
  },
  bath: {
    type: Number,
    required: false
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