"use strict";

var mongoose = require('mongoose');

var joi = require('joi');

var string = require('joi/lib/types/string');

var customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  lastname: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  },
  phoneNumber: {
    type: String,
    minlength: 11,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  system: {
    type: String,
    required: true
  }
});
var Customer = mongoose.model('Customer', customerSchema);

var validateCustomer = function validateCustomer(customer) {
  var schema = {
    firstname: joi.string().min(5).max(50).required(),
    lastname: joi.string().min(5).max(50).required(),
    phoneNumber: joi.string().min(11).required(),
    cnic: joi.string().required(),
    address: joi.string().required(),
    system: joi.string().required()
  };
  return joi.validate(customer, schema);
};

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;