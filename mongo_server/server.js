require('../server.babel');
var http = require('http');
var express = require('express');
var requests = require('./requests.js');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

var defaultCorsHeaders = {
"access-control-allow-origin": "*",
"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
"access-control-allow-headers": "content-type, accept",
"access-control-max-age": 10
};
var plainTextHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);
var jsonHeader = Object.assign({'content-type': 'text/json'}, defaultCorsHeaders);
var port = 3030;
var ip = '127.0.0.1';
var db;



MongoClient.connect("mongodb://localhost:27017/musicblog", function(err, database) {
	if(!err) {
		console.log('we are connected');
		db = database;

		// db.collection('articles').find().toArray().then(function(data) {
		// 	// console.log(data);
		// 	exports.articles = data;
		// });

		
		app.listen(port, function(err) {
			if(err) {
				console.log('server listening err', err);
			}
			else {
				console.log('server is listening');
			}
		})
	}
	else {
		console.log('error connecting to mongo')
	}
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/articles', function(req, res) {
	db.collection('articles').find().toArray().then(function(data) {
		// console.log(data);
		// exports.articles = data;
		res.set(jsonHeader);
		res.status(200).json(data);
	});
})