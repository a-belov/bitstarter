var express = require('express');

var app = express.createServer(express.logger());  

var fs = require('fs');

var helloText = fs.readFileSync("index.html");

var bufferString = new Buffer(helloText, 'utf8');

app.get('/', function(request, response) {
  response.send(bufferString.toString('utf-8'));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
