const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3001;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
  console.log('New User connected');


  socket.on('createMessage',(message)=>{
    console.log('message from client :',message);
    io.emit('newMessage',{
      from:message.from,
      text :message.text,
      createdAt: new Date().getTime()
    });

  });
  socket.on('disconnect',()=>{
    console.log('user is disconnected');
  });





});

var publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

console.log(publicPath);



server.listen(port, ()=>{
  console.log(`Listening to {port}`);
});
