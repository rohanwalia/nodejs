var express = require("express");
//var app = express();
var router = express.Router();

router.get("/",function(req,res){
    res.send("Get Request is being served")
})

router.post("/",function(req,res){
    res.send("Post request is being served")
})

module.exports = router; 