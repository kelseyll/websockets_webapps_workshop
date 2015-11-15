// Import express framework for backend.
// Express will handle url routing for our server
var express = require('express');
var app = express();                // Create new instance of express
app.use(express.static('public'));  // make files in /public available

// Import HTTP
var http = require('http')
var http_server = http.Server(app); // allows get requests on our app endpoints

var socketio = require('socket.io')
var io = socketio(http_server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http_server.listen(8080, function() {
  console.log('listening on *:8080');
});
