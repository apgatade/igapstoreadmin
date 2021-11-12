var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(express.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", 'POST, GET, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.get("/", function(req, res){
    res.send("Hello");
    res.end();
});

app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));

 app.listen(8082, function () {
     console.log("Server started");
 });