'use strict';

require('babel-core/register')({});

var path = require('path');
var server = require('./server/server').default;
var project_base_path = path.resolve(__dirname)
var Webpack_isomorphic_tools = require('webpack-isomorphic-tools')
var PORT = process.env.PORT || 3000;


global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(require('./webpack-isomorphic-tools-configuration'))
.development(process.env.NODE_ENV === 'development')
.server(project_base_path, function() {
	server.listen(PORT, function () {
		console.log("environment ", process.env.NODE_ENV);
	  console.log('Server listening on: ' + PORT);
	});
});


