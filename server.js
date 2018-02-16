var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes= require("./app/routing/apiRoutes.js");
var friends=require("./app/data/friends.js");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "./app/public")))
htmlRoutes(app, path);
apiRoutes.routes(app);

app.listen(PORT, function(){
	console.log("APP is listening on " + PORT);
});