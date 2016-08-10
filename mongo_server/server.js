require('../server.babel');
var http = require('http');
var requestHandler = require('./request-handler');
var bodyParser = require('body-parser');
var db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;

var port = 3030;
var ip = '127.0.0.1';
var server = http.createServer(requestHandler.app);
var db;


MongoClient.connect("mongodb://localhost:27017/trillvox", function(err, database) {
	if(!err) {
		console.log('we are connected');
		db = database;

		db.collection('articles').find().toArray().then(function(data) {
			// console.log(data);
			exports.articles = data;
		});

		
		server.listen(port, function(err) {
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

