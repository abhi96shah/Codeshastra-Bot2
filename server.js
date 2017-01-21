var connect=require('connect');
var http=require('http');

var app=connect();
http.createServer(app).listen(8088);
console.log("Server is Running!");