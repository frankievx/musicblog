var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var requests = require('./requests.js');
// var browserify = require('browserify-middleware');
// var reactify = require('reactify');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,"../client")));


app.get('/articles', function(req, res) {
  requests.serveArticles(req,res);
})

exports.app = app;
