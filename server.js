//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
})


// Import routes
const partnerRoutes = require("./routes/partnerRoutes.js")


// Initialize Express app
const app = express()
const port = 7000


mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });


// express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());



// Use imported routes
app.use("/", partnerRoutes);



//error message
app.get("*", (req, res) => {
    res.send("error! page does not exist");
  });



app.listen(port, () => console.log(`listening on port ${port}`));