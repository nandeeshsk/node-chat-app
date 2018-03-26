var socket = io();
socket.on('connect',function (){
  console.log('connected to server');
});

socket.on('disconnect',function (){
  console.log('disconnected from server');
});

// socket.on('newEmail',function (value){
//   console.log('recieved new email',value);
// });
//
//
socket.on('newMessage', function (message){
  console.log('message : ',message);
});
//
// socket.emit('createMessage',{
//     from:'Nandeesh',
//     text : 'Hello Welcome how can I help you? '
// });
