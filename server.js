//var http = require('http');
var express = require('express');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "./";
var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/mydb");
var schema = require('./schema_file.js').somethingSchema;
var ToDo = mongoose.model('ToDo', schema);


mongoose.promise = require('bluebird');
mongoose.promise = global.Promise;

var dbURL = "mongodb://localhost/mydb";
var current_list = "";
var tasks;

mongoose.connection.once('open', function () {    

    http.createServer(function (req, res) {
        if (req.method === "POST") {
            var jsonData = "";
            req.on('data', function (chunk) {
                jsonData += chunk;
            });

            req.on('end', function () {
                var requestObject = JSON.parse(jsonData);
                var postMessage =  jsonData.substring(9, jsonData.length-2);
                var reqMessage = JSON.stringify(requestObject);
                var task = jsonData.substring(9, reqMessage.length-2);

                var newItem = new ToDo({
                    something: task
                })
                newItem.save(function (err, doc){

                })
                res.writeHead(200);
                res.end(JSON.stringify({}));
            });
        } else if (req.method === "GET"){
            var urlObj = url.parse(req.url, true, false);
            var extended_path = "/index.html";
            if (req.url != "/list") { 
	           fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
                    if (err) {
                        res.writeHead(404);
                        res.end(JSON.stringify(err));
                        return;
                    }
                    
                    res.writeHead(200);
                    res.end(data);
                });
            } else if (req.url == "/list") { 
                var dbdocs = "dbdocs";
                var query = ToDo.find();
                query.exec(function (err, docs) {                    
                    for (var i in docs) {
                        console.log(docs[i].something);
                    }
                    res.writeHead(200);
                    res.end(JSON.stringify({docs}));
                });
            }
        }
    }).listen(8080);
});
