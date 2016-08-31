# musicblog


## Welcome! 

This is a new take on a blog platform. Currently I'm building it towards a music platform. 
The project is built with ReactJS and Redux on the front end. The project is also server side rendered.
The api server is built with Node, Express, and MongoDB.


##How To Install

Clone the repo, enter the directory and run "npm install". Then run "npm run dev"

## Scripts
    "start": "concurrent --kill-others \"npm run start-prod\" \"npm run start-prod-api\"",
    "start-prod": "better-npm-run start-prod",
    "start-prod-api": "better-npm-run start-prod-api",
    "build": "better-npm-run build",
    "postinstall": "npm run build",
    "lint": "eslint -c .eslintrc src api",
    "start-dev": "better-npm-run start-dev",
    "start-dev-api": "better-npm-run start-dev-api",
    "watch-client": "better-npm-run watch-client",
    "dev": "concurrent --kill-others \"npm run watch-client\" \"npm run start-dev\" \"npm run start-dev-api\"",
    "test": "karma start",
    "test-node": "./node_modules/mocha/bin/mocha $(find api -name '*-test.js') --compilers js:babel-core/register",
    "test-node-watch": "./node_modules/mocha/bin/mocha $(find api -name '*-test.js') --compilers js:babel-core/register --watch"
