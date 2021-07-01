"use strict";

var string = require('joi/lib/types/string');

var winston = require('winston');

module.exports = function (err, req, res) {
  winston.error(err.message, err);
  res.status(500).send('something went wrong');
};