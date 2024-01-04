const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan");

const userRoutes = require("./routes/user");

app.use( morgan('dev') );

app.use( (req, res, next) => {
  console.log( "Middleware is logging" );
  next();
});

app.use( "/user", userRoutes );

app.listen( port, () => {
  console.log( `heWitUs server running on port: ${port}` );
});

app.get( "/", ( req, res ) => {
  res.send( "Homepage markup will go here." );
});