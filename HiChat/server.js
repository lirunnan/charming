//服务器响应页面部分
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);
app.use('/', express.static(__dirname + '/www'));
//socket 部分
io.on('connection', function(socket) {
  socket.on('nickname', function(nicknameData) {
    socket.broadcast.emit('name', nicknameData);
    console.log(nicknameData);
  });
  socket.on('postMsg', function(data) {
    socket.broadcast.emit('system', data);
    console.log(data);
  });
});
server.listen(3000);
