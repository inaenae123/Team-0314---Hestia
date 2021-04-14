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
const Questionnaire = require("../model/Questionnaire");
//gets users information
router.get("/user", (req, res) => {
  console.log("I received a GET request")
    User.find({},function(err, docs){
        res.json(docs);
    });
    console.log("Returned data");
});
//gets listing information
router.get("/listing", (req, res) => {
  console.log("I received a GET request")
    Listing.find({},function(err, docs){
        res.json(docs);
    });  
});
//updates lease signed field in database
router.post("/signLease", async (req, res) => {
  try {
    console.log("the req body is " + req.body.userId)
    let user = await User.findOneAndUpdate({ "_id": req.body.userId }, 
    { "$set": {"signed": true}}, {new: true});
    //await user.save();
    res.json({error : false})
  } catch(error) {
    res.status(400).json({ error });
  }
});
//get questionnaire
router.get("/questionnaire", (req, res) => {
  console.log("I received a GET request")
    Questionnaire.find({},function(err, docs){
        res.json(docs);
    });  
});

//Get request for fields in profile page
router.get("/currentListing", (req, res) => {
  //console.log(req);
  let currentListing;
  Listing.find({},function(err, docs){
    for(let r = 0; r < docs.length; r++) {
      if(docs[r].id == req.query.id) {
        currentListing = docs[r];
      }
    }
    res.json(currentListing);
});
  console.log("Returned listing");
});

//Get request for fields in profile page
router.get("/userprofile", (req, res) => {
  console.log("I received a GET request")
  console.log("the user id is" + req.query.id)
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
  console.log("I received a post request")
  const update = ({
    userId: req.body.userId,
    name: req.body.name,
    location: req.body.location,
    Occupancy: req.body.Occupancy,
    roomMates: req.body.roomMates, 
    price: req.body.price,
    policies: req.body.policies,
    description: req.body.description,
    bed: req.body.bed,
    bath: req.body.bath
  });
  let doc = await Listing.findOneAndUpdate({ userId: req.body.userId }, update, {new: true, upsert: true});
  try {
    const savedListing = await doc.save();
    res.json({ error: null, data: savedListing });

    console.log("saved listing" + savedListing)
    console.log("this is the response" + res.data)
  } catch (error) {
    console.log("FUCK");
    console.log(error);
    const room = new Listing(update);
    try {
      const savedListing = await room.save();
      res.json({ error: null, data: savedListing });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
});
//add questionniare question
router.post("/addQuestionnaire", async (req, res) => {
  console.log("I received a Questionaire request")
  const update = {
    userId: req.body.userId,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    answer5: req.body.answer5,
    answer6: req.body.answer6
  };
   let doc = await Questionnaire.findOneAndUpdate({ userId: req.body.userId }, update, {new: true, upsert: true});
   try {
    const existingQuestionnaire =  await doc.save();
    res.json({ error: null, data: existingQuestionnaire });
    console.log("YAY");
  } catch (error) {
    console.log("FUCK");
    console.log(error);
    const question = new Questionnaire(update);
    try {
      const savedQuestionnaire = await question.save();
      res.json({ error: null, data: savedQuestionnaire });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.put("/user", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    roommates: req.body.roommates,
    phone_number: req.body.phone_number,
    about_me: req.body.about_me,
    listingName: req.body.listingName,
    listingLocation : req.body.listingLocation,
    listingOccupancy: req.body.listingOccupancy,
    listingRoomMates: req.body.listingRoomMates,
    tags: req.body.tags

  });
  //find user id of user we want to return information of
  let doc = await User.findOneAndUpdate({ "_id": req.body._id }, 
  { "$set": { "name": user.name, "about_me" : user.about_me, "roommates": user.roommates, "email": user.email, "phone_number": user.phone_number, "address": user.address, "listingName": user.listingName, "listingLocation": user.listingLocation, "listingOccupancy": user.listingOccupancy, "listingRoomMates": user.listingRoomMates, "tags": user.tags}}, {new: true});
  await doc.save();

});
//save user questionnaire responses in database
router.put("/questionnaire", async (req, res) => {
  const user = new User({
    userId: req.body.userId,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    answer5: req.body.answer5,
    answer6: req.body.answer6
  });
  //find user id of user we want to save questionnaire information
  let doc = await Questionnaire.findOneAndUpdate({ "_id" : req.body._id }, 
  { "$set": { "name": user.name, "email": user.email, "phone_number": user.phone_number, "address": user.address, "listingName": user.listingName, "listingLocation": user.listingLocation, "listingOccupancy": user.listingOccupancy, "listingRoomMates": user.listingRoomMates}}, {new: true});
  await doc.save();

});
//updates listing information
router.put("/updateListing", async (req, res) => {
  const listing = new Listing({
    userId: req.body.userId,
    name: req.body.name,
    location: req.body.location,
    Occupancy: req.body.Occupancy,
    roomMates: req.body.roomMates,
    price: req.body.price,
    policies: req.body.policies,
    description: req.body.description,
    bed: req.body.bed,
    bath: req.body.bath

  });
  console.log("the req body is " + req.body.name)
  let doc = await Listing.findOneAndUpdate({ "_id": req.body._id }, 
  { "$set": {"name": listing.name, "location": listing.location, "Occupancy": listing.Occupancy, "roomMates": listing.roomMates}}, {new: true});
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


