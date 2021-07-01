"use strict";

var express = require('express');

var cors = require('cors');

var path = require('path');

var winston = require('winston');

var expressLayoutes = require('express-ejs-layouts');

var bodyParser = require('body-parser');

var config = require('./startup/config');

var error = require('./middleware/error');

var customerRoutes = require('./routes/customer-routes'); //const bootstrap = require("bootstrap");


var jquery = require("jquery"); //4zconst popper = require("popper");


var app = express();

require('./startup/db')();

require('./startup/logging')();

require('./startup/validations')();

app.use(expressLayoutes);
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(customerRoutes.routes); //app.use(err);

app.listen(config.port, function () {
  winston.info('App is listening on url http://localhost:' + config.port);
});