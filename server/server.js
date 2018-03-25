const path = require('path');
const express = require('express');

const port = process.env.PORT || 3001;
var app = express();

var publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

console.log(publicPath);



app.listen(port, ()=>{
  console.log(`Listening to {port}`);
});
