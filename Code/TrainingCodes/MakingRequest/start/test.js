var https = require('https');
var fs = require('fs');

options = {

    hostname : "en.wikipedia.org",
    port : 443,
    method : "GET",
    path : "/wiki/Virat_Kohli"
};

var responseBody = "";

var request = https.request(options,function(response){

    console.log(response.statusCode);

    response.on("error",function(error){

        console.log();
        
    });
    
});

request.on("error",function(error){

    console.log(error);
    
})