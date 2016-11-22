/*
var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World Zzz\n');
    
    
    app.listen(process.env.PORT || 3000);   
    
}).listen(3000, '127.0.0.1');
console.log('Server running at http://localhost:3000/ ou http://127.0.0.1:3000/');
*/

/*eslint-env node*/

//------------------------------------------------------------------------------
//node.js starter application for Bluemix
//------------------------------------------------------------------------------

//This application uses express as its web server
//for more info, see: http://expressjs.com
var express = require('express');

//cfenv provides access to your Cloud Foundry environment
//for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

//create a new express server
var app = express();

//serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

//get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

//start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
// print a message when the server starts listening
console.log("server starting on " + appEnv.url);
});
