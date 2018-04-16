// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7100;
var PORT2 = 7200;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are awesome" + request.url);
};
function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are bad" + request.url);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT, function () {
  console.log("server is now listening on port " + PORT);
});

server2.listen(PORT2, function () {
  console.log("server is now listening on port " + PORT2);
});
