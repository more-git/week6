var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "./";
var MongoClient = require('mongodb').MongoClient;

//
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/mydb");
var schema = require('./schema_file.js').somethingSchema;
var ToDo = mongoose.model('ToDo', schema);
//

//MongoClient.connect("mongodb://localhost/", function(err, db) {
mongoose.connection.once('open', function () {    
    http.createServer(function (req, res) {
        if (req.method === "POST") {
            var jsonData = "";
            req.on('data', function (chunk) {
                jsonData += chunk;
            });
            req.on('end', function () {
                var requestObject = JSON.parse(jsonData);

                /**var newItem = new ToDo({
                    something: "Another",
                    age: 24
                })**/

                var postMessage =  jsonData.substring(9, jsonData.length-2);
                var reqMessage = JSON.stringify(requestObject);
                var task = jsonData.substring(9, reqMessage.length-2);
                //console.log(requestObject.data);
                //console.log(jsonData);
                //console.log(postMessage);
                //console.log(reqMessage);
                console.log(task);
                /**var newItem = new ToDo({
                    something: postMessage,
                    age: 24
                })**/
                var newItem = new ToDo({
                    something: task,
                    age: 24
                })

                /**var newItem = new ToDo(
                    requestObject
                )**/
                newItem.save(function (err, doc){
                    console.log("Saved to the database: " + doc)
                })

                
                res.writeHead(200);
                res.end(JSON.stringify({}));
            });
        } else if (req.method === "GET"){
            var urlObj = url.parse(req.url, true, false);
            fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                
                var query = ToDo.find()
                query.exec(function (err, docs) {
                    console.log("Things in the database: " + docs);
                })
                res.writeHead(200);
                res.end(data);
            });
        }
    }).listen(8080);
});
