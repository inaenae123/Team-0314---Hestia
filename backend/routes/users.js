const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateLoginInput = require("../validation/login");
// Load User model
const User = require("../model/User");
const Listing = require("../model/Listing");



router.get("/user", (req, res) => {
  console.log("I received a GET request")
    User.find({},function(err, docs){
        console.log("Getting data from db");
        console.log(docs);
        res.json(docs);
    });
    console.log("Returned data");
  
});

router.get("/listing", (req, res) => {
  console.log("I received a GET request")
    Listing.find({},function(err, docs){
        console.log("Getting data from db");
        console.log(docs);
        res.json(docs);
    });
    console.log("Returned data");
  
});

//Get request for fields in profile page
router.get("/currentListing", (req, res) => {
  console.log("I received a GET request")
  //console.log(req);
  let currentListing;
  Lising.find({},function(err, docs){
    console.log("Getting current listing");
    console.log(docs);
    console.log(docs[0]);
    console.log("BEGIN FOR LOOP");
    console.log(req.query);
    for(let r = 0; r < docs.length; r++) {
      if(docs[r].id == req.query.id) {
        currentListing = docs[r];
        console.log(docs[r]);
      }
    }
    console.log(currentListing);
    res.json(currentListing);
});
  console.log("Returned user");
});

//Get request for fields in profile page
router.get("/userprofile", (req, res) => {
  console.log("I received a GET request")
  //console.log(req);
  let currentUser;
  User.find({},function(err, docs){
    console.log("Getting current user");
    console.log(docs);
    console.log(docs[0]);
    console.log("BEGIN FOR LOOP");
    console.log(req.query);
    for(let r = 0; r < docs.length; r++) {
      if(docs[r].id == req.query.id) {
        currentUser = docs[r];
        console.log(docs[r]);
      }
    }
    console.log(currentUser);
    res.json(currentUser);
});
  console.log("Returned user");
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/addListing", async (req, res) => {
  console.log("I received a Put request")
  const listing = new Listing({
    name: req.body.name,
    location: req.body.location,
    Occupancy: req.body.Occupancy
  });
  try {
    const savedListing = await listing.save();
    res.json({ error: null, data: savedListing });
  } catch (error) {
  
    res.status(400).json({ error });
  }

});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/user", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    roommates: req.body.roommates,
    phone_number: req.body.phone_number,
    about_me: req.body.about_me
  });
  let doc = await User.findOneAndUpdate({ "_id": req.body._id }, 
  { "$set": { "name": user.name, "email": user.email, "phone_number": user.phone_number, "address": user.address}, "about_me": user.about_me, "roommates": user.roommates}, 
    {new: true});
  await doc.save();

});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    roommates: req.body.roommates,
    phone_number: req.body.phone_number,
    about_me: req.body.about_me
  });
  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser });
  } catch (error) {
  
    res.status(400).json({ error });
  }
});

router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
console.log(email)
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
console.log(password == user.password)
    
      if (password == user.password) {
        console.log("hereee")
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    
  });
});


module.exports = router;


