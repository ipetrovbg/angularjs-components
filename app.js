var express = require('express')
var server = express();
server.use('/public', express.static(__dirname + '/public'));

server.get('/v1/api/get-name/:name', function(req, res, next){
  res.status(200).json({ name: req.params.name });
});

server.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


var port = 8000;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});