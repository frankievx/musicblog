var context = require.context('./mongo_server', true, /-test\.js$/);
// var apicontext = require.context('./api', true, /-test\.js$/);
context.keys().forEach(context);
