var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
let parsedURL = url.parse(req.url, true);
var pathname;
if(parsedURL.path.toString() == '/moto'){
pathname = "src/html/" + parsedURL.path.toString();
console.log(pathname);
}
else if(parsedURL.toString() == "/map"){
pathname = "src/html/" + parsedURL.path.toString();
console.log(pathname);
}
else{
console.log("not a valid url:" + parsedURL.path);
}
fs.readFile(pathname, function(data){
res.writeHead(200, {'Content-Type': 'text/html'})
res.write(data);
return res.end();
});
}).listen(8080);
