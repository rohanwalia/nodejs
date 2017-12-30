var https = require('https');
var fs = require('fs');

options = {

    hostname : "en.wikipedia.org",
    port : 443,
    method : "GET",
    path : "/wiki/Virat_Kohli"
};

var responseBody = "";

https.request(options,function(response){

    console.log("Response from Server Started");
    console.log("Status Code from Server : "+response.statusCode);
    console.log("Headers Recieved : "+response.headers);

    response.once("data",function(chunk){
        console.log("Read first Chunk");
        console.log(chunk);
        responseBody += chunk;
    })

    response.on("data",function(chunk){
        console.log(`Chunk --- ${chunk.length}`);     
        responseBody += chunk;
    })
    
    response.on("end",function(error){
    
    if(error){
        throw error;
    }

    fs.writeFile("virat_kohli.html",responseBody,function(error){
        if(error){
            throw error;
        }
    })
    console.log("File Downloaded");
    
    })

//End of request
});

console.log("Making request to the Server...");
