const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema for each user
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  address:{
    type: String,
    required: false
  },
  roommates: {
    type: Number,
    required: false
  },
  phone_number:{
    type: String,
    required: false
  },
  about_me: {
    type: String,
    required: false
  },
  listingName:{
    type: String,
    required: false
  },
  listingLocation: {
    type: String,
    required: false
  },
  listingOccupancy:{
    type: Number,
    required: false
  },
  listingRoomMates: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: false
  },
  signed: {
    type: Boolean,
    default: false
  }
});
module.exports = User = mongoose.model("users", UserSchema);