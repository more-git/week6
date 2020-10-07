var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/", function(err, db) {    
    app.post('*', function(req, res) {
    	var jsonData = "";
     	req.on('data', function (chunk) {
                jsonData += chunk;
     	});
        req.on('end', function () {
            var requestObject = JSON.parse(jsonData);
	    var myDB = db.db("week7database");    
	    myDB.collection("todo", function(err, todo) {
		todo.save(function (err, results){
		    console.log(results);
		 });
	});    
	res.writeHead(200);
        res.end(JSON.stringify({}));
    });
});	
app.use(express.static('./')) 
