const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( ( req, res ) => {
  if( req.url === "/" ){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html' );
    res.write("<h1>Where in the world is...</h1>");
    res.write("<h1>Carmen Sandiego.</h1>");
    res.end( 'Closing res. \n' );
  } else if ( req.url === "/jordan" ){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html' );
    res.write("<h1>The Goat</h1>");
    res.end();
  } else {
    res.statusCode = 404;
    // res.setHeader('Content-type', 'text/html' );
    res.end(`${res.statusCode} - Does not exist. \n`);
  }
  
});

server.listen( port, hostname, () => {
  console.log( `Sever running at https://${hostname}:${port}/` );
});