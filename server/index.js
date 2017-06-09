const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// bring in any express middleware functions and other libraries you need

// this will force the db/index.js module to run, establishing a database connection.
// you may or may not need to use the database connection in this index.js file.
// if you need to use it, assign the return value of require('./db') to a variable.
require('./db');

// create an express instance 

// hook any middleware you need to into the express instance, including your route handlers
// hint: use the bodyParser middleware to parse the request body for POST & PUT requests.

// serve the `../public/` folder using the express.static() middleware function
// (you will want to use the path library to correctly resolve the path to ../public.)

// listen on this port:
const port = 5050;
