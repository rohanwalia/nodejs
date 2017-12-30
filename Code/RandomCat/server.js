var http = require("http");
var fs = require('fs');
var path = require('path');

var catImagesArray = [
    "http://random.cat/i/blackfootedcat.jpg",
    "http://random.cat/i/kittle_whiskey.jpg",
    "http://random.cat/i/wdvknwn.jpg",
    "http://random.cat/i/1k792ptg.jpg",
    "http://random.cat/i/6212539367_4d2998de48_z.jpg",
    "http://random.cat/i/577ot.jpg",
    "http://random.cat/i/TwgVd.jpg",
    "http://random.cat/i/1420331_620830491300525_1189154553_n.jpg",
    "http://random.cat/i/xhfMW.jpg"
]

http.createServer(function(req,res){

    console.log("Incoming URL : "+req.url);

    if(req.url == "/"){

        console.log("Serving request for /");
        
    var responseBody = `
    <!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css"/>
    <title>Ocean Birds</title>
</head>
<body>
    <main>
        <h1>Meeeoooowwwww :) </h1>
        <figure>
            <img src="${catImagesArray[Math.floor(Math.random() * catImagesArray.length)]}" alt="Cat"/>
            <figcaption> Cute Cat !!!.</figcaption>
        </figure>
    </main>
</body>
</html>    
    `
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end(responseBody);
    }
    else if(req.url.match(/.css$/)){

        console.log("Serving request for "+req.url);
        var cssUrl = path.join(__dirname,"public",req.url);
        console.log("cssURL : "+cssUrl);

        fs.readFile(cssUrl,function(error,data){
            if(error){
                throw error;
            }
            res.writeHead(200,{"Content-Type":"text/css"});
            res.end(data);  
        })
        
    }
}).listen(3000);

console.log("Server started on port 3000....");
