const express = require("express");
const router = express.Router();

router.use( (req, res, next) => {
  console.log("User Request Time: ", Date.now() );
  next();
});

router.route("/")
  .get( (req, res) => {
    res.send ( "Get random user" );
  })
  .post( (req, res) => {
    res.send( "Create user" );
  })
  .put( (req, res) => {
    res.send( "Update user information" );
  })
  .delete( (req,res) => {
    res.send( "Delete user" );
  });

router.get( "/profile", (req, res) => {
  res.send( "Get user profile" );
});


module.exports = router;