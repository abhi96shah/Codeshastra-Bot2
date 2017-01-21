var http=require('http');
var fs=require('fs');


function send404(response){
	response.writeHead(404, {"Context-Type": "text/plain"});
	response.write("<h1>Error 404: Site Not Found!</h1>");
	response.end();
}

function onRequest(request,response){
	console.log('A request was made by the user '+ request.url);
	if(request.method=='GET'&&request.url=='/'){
		response.writeHead(200,{"Context-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else{
		send404(response);
	}
}
http.createServer(onRequest).listen(8088);
console.log("Server is Running");
