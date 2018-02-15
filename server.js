var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes;
var apiRoutes;
var friends;

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use