var express = require("express");
var app = express();

var PORT= process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

var htmlroute = require("./routes/htmlroute");
app.use(htmlroute);

var apiroute = require("./routes/apiroute");
app.use(apiroute);

app.listen(PORT, function(){
    console.log("app is listening"+ PORT)
});