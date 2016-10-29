var express = require("express");
var app= express();
var PORT = process.env.PORT || 3000

var mongoose = require("mongoose");
app.use(express.static(__dirname + "/public"))

var person1 ={

	name : "narayana",
	email : "narayana@gmail.com",
	mobile : "012341564"
}