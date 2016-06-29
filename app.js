var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.VCAP_APP_PORT || 3000;

var clients = [];

io.sockets.on('connection', function(socket){
	var client = socket.request.connection.remoteAddress;
	clients.push(client);
	console.log(clients);
	socket.on('data', function(d){
		//console.log("Client Connected." + socket.request.connection.remoteAddress);
		console.log(d);
	});
});

server.listen(port);
console.log('Servidor funcionando en http://localhost:' + port);



