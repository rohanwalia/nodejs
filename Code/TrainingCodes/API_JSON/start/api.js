var http = require("http");

var jsonData = require("./data/inventory"); // returns JSON data from specified file as array. No .js is needed

http.createServer(function(req,res){

    if(req.url == "/"){
    res.writeHead(200,{"Content-Type":"text/json"});
    res.end(JSON.stringify(jsonData));
    }
    else if(req.url.match(/instock/)){
        console.log("Request is Instock");
        
        listInStock(res);

    }
    else if(req.url.match(/outofstock/)){

        listOutOfStock(res);
    }
    else{

        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end(`No API Not Found Matching ${req.url}`);
    }

}).listen(3000);


function listInStock(response) {
    console.log("Inside listInStock");
    
    var responseData = [];
    jsonData.filter(function(element){
        console.log("element.avail " +element.avail);
        
        if(element.avail == "In stock"){
            responseData.push(element);
        }
    })
    console.log("ResponseDataLength : "+responseData.length);
    response.writeHead(200,{"Content-Type":"text/json"})
    response.end(JSON.stringify(responseData));

}

function listOutOfStock(response) {
    console.log("Inside listOutOfStock");
    var responseData = [];
    jsonData.filter(function(element){
        console.log("element.avail " +element.avail);
        
        if(element.avail == "On back order"){
            responseData.push(element);
        }
    })
    console.log("ResponseDataLength : "+responseData.length);
    response.writeHead(200,{"Content-Type":"text/json"})
    response.end(JSON.stringify(responseData));
}

console.log("Server Listening on port 3000 ..");
