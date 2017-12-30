var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){

    console.log(`Request for ${req.url}`);
    
    if(req.url =="/"){
        //res.writeHead(200,{"Content-Type": "text/plain"})
        fs.readFile("./public/index.html",function(error,data){
            if(error){
                console.log(error);
            }
            else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.end(data);
            }
        })
    }    
    else if(req.url.match(/.css$/)){ 
        console.log("Got CSS Request");
        var cssPath = path.join(__dirname,"public",req.url);
        console.log("CSSPath is : "+cssPath);
        var readStream = fs.createReadStream(cssPath);
        res.writeHead(200,{"Content-Type":"text/CSS"});
        readStream.pipe(res);

   }
   else if(req.url.match(/.jpg$/) || req.url.match(/.jpeg$/)){
       console.log("Got JPEG Request");
       var imagePath = path.join(__dirname,"public",req.url);
       console.log("ImagePath is : "+imagePath);
       var readStream = fs.createReadStream(imagePath);
       res.writeHead(200,{"Content-Type":"image/jpeg"});
       readStream.pipe(res);
   }    
    else{

        res.writeHead(400,{"Content-Type": "text/plain"})
        res.end("File Not Found");
    }
}).listen(3000);

console.log("Server Started on port 3000 ....");
