var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(3000);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
 
 /* console.log('Updated!!!')
  console.log(socket.id)
  socket.on('update', ()=> io.emit('update') )
 /* socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });*/
});