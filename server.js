var express = require("express");
var app= express();
var PORT = process.env.PORT || 3000

var mongoose = require("mongoose");
var contact = require("./mongoose/contact");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost/contactlist", function(){
	console.log("connected");});
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());
app.get("/contactList", function(req, res){
contact.getcontacts(function(err, data){
	if(err){
		throw err;
	}
	
	res.json(data);
})
})
app.post("/contactList", function(req, res){
var body = req.body;//will featch body details
contact.addcontact(body, function(err, data){
	if(err){
		throw err;
	}
	res.json(data);
});
console.log(body);
});
app.get("/contactList/:id", function(req, res){
	var id = req.params.id;

	contact.getContactById(id,function(err, data)
	{
		if(err){
		throw err;
	}
	res.json(data);
	})
})
app.put("/contactList/:id", function(req, res){
	var id= req.params.id;
	var body = req.body;
	contact.updateContact(id, body, function(err, data){
		if(err){
		throw err;
	}
	res.json(data);
	})

})
app.delete("/contactList/:id", function(req, res){
	var id= req.params.id;
	contact.removeContact(id, body, function(err, data){
		if(err){
		throw err;
	}
	res.json(data);
	})

})
app.listen(PORT,function(){

	console.log("serveer running");
})
