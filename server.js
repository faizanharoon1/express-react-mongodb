var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var port = 3000;
var cors = require('cors');
// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/admin')
.then(() => { // if all is ok we will be here
  console.log('StartDB');
})
.catch(err => { // if error we will be here
    console.error('DB App starting error:', err.stack);
    process.exit(1);
});

// Required application specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);
 
// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});