const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const PORT = 3000;
const bodyParser = require("body-parser");
const passport = require("passport");
const router = express.Router();

// connect to db
dotenv.config();


//connects Mongoose to the local database that we want to write to.
var mongoDB = "mongodb+srv://Rafael:777rafael@cluster0.kiegx.mongodb.net/LocalLibrary?retryWrites=true&w=majority"
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true},
() => console.log("Database 'Labra' sucessfully connected!")
);

//These functions ensure that the database is indeed succesfully connected and throws an error message otehrwise
const mondb = mongoose.connection;
mondb.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mondb.once('open', function() {
    console.log("Labra database connection established successfully");
});

//Gets html from front end
app.use(express.static( "../front-end/build"));
app.use(router);


//import routes
const userRoutes = require("./routes/users");

//middlewares
app.use(express.json()); // for body parser

// Passport middleware
//app.use(passport.initialize());

// Passport config
//require("./config/passport")(passport);

//connects Mainsite and Database Labra
app.use("/api", userRoutes);
//connects express() to our html site on port 3000
app.listen(PORT, () =>
  console.log("Server is up and listening on Port: " + PORT)
);
