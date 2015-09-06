var express = require('express');
var livereload = require('connect-livereload');

var port = 5000;
var server = express();

server.use(livereload());  //this must be before serving the dist folder

server.use(express.static(__dirname + '/../../dist/'));

server.listen(port, function () {
	console.log('Sans Pantalones server running on port', port);
});

module.exports.server = server;   //require for gulp-express to work