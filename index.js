'use strict';
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var port = process.env.port || 8080;

//We need a function which handles requests and send response
function handleRequest(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World 2 - http - ' + require('process').version);
}

//Create a server
var server = http.createServer(handleRequest);

server.listen(port, function () {
	console.log("Server listening on: http://localhost:%s", port);
});