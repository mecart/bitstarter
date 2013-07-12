var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var htmlbuf = new Buffer(fs.readFileSync('index.html'));
var html = htmlbuf.toString();


app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
