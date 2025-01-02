// create a webserver that listens on port 3000
// and has a single route for POST requests to /comments
// that will add the comment to the comments array

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var comments = [];

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var comment = querystring.parse(body).comment;
      comments.push(comment);
      res.end('Comment added');
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000);
console.log('Server listening on port 3000');