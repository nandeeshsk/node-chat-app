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

  socket.emit('newEmail',{
    from : 'abc@gmail.com',
    text:'hello world',
    createdAt: '123'
  });

  socket.on('createEmail',(newEmail)=>{
    console.log('crearedEmail  :',newEmail);
  });

  socket.emit('newMessage',{
    from:'Nandeesh',
    text : 'Hello Welcome how can I help you? ',
    createdAt:'123'
  });
  socket.on('createMessage',(message)=>{
    console.log('message from client :',message);

  });
  socket.on('disconnect',()=>{
    console.log('user is disconnected');
  });





})

var publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

console.log(publicPath);



server.listen(port, ()=>{
  console.log(`Listening to {port}`);
});
