var express = require("express");
var app = express();

var routes = require("./router") 

var data = [
{
    "name":"Joy",
    "Title":"Consultant"
},
{
    "name":"Rocky",
    "Title":"Developer"
},
{
    "name":"Zack",
    "Title":"Manager"
}

]

app.use("/",routes);


app.get("/api",function(req,res){
    res.json(data);
})

app.listen(3000);
