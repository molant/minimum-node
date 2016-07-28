'use strict';
//Lets require/import the HTTP module
var http = require('http');
var _ = require('lodash');

//Lets define a port we want to listen to
var port = process.env.port || 8080;

//We need a function which handles requests and send response
function handleRequest(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	var message = _.reduce([1,2,3,4,5], function (total, n) {
		return total + n;
	}, 0);
	message += ' Hello World - http - ' + require('process').version;
	res.end(message);
}

//Create a server
var server = http.createServer(handleRequest);

server.listen(port, function () {
	console.log("Server listening on: http://localhost:%s", port);
});