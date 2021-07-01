"use strict";

var _require = require('../models/customer'),
    Customer = _require.Customer,
    validate = _require.validate;

var getAllCustomers = function getAllCustomers(req, res, next) {
  var list;
  return regeneratorRuntime.async(function getAllCustomers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Customer.find().exec());

        case 2:
          list = _context.sent;
          res.render('customerlist', {
            customers: list
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getAddCustomerView = function getAddCustomerView(req, res, next) {
  res.render('addCustomer');
};

var addCustomer = function addCustomer(req, res, next) {
  var _validate, error, data, customer;

  return regeneratorRuntime.async(function addCustomer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _validate = validate(req.body), error = _validate.error;

          if (!error) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(422).send(error.details[0].message));

        case 3:
          data = req.body;
          _context2.next = 6;
          return regeneratorRuntime.awrap(new Customer({
            firstname: data.firstname,
            lastname: data.lastname,
            phoneNumber: data.phoneNumber,
            cnic: data.cnic,
            address: data.address,
            system: data.system
          }));

        case 6:
          customer = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(customer.save());

        case 9:
          customer = _context2.sent;
          res.redirect('/');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getUpdateCustomerView = function getUpdateCustomerView(req, res, next) {
  var id, onecustomer;
  return regeneratorRuntime.async(function getUpdateCustomerView$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Customer.findById(id).exec());

        case 4:
          onecustomer = _context3.sent;
          res.render("updateCustomer", {
            customer: onecustomer
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(400).send(_context3.t0.message);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var updateCustomer = function updateCustomer(req, res, next) {
  var _validate2, error, id, data, customer;

  return regeneratorRuntime.async(function updateCustomer$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _validate2 = validate(req.body), error = _validate2.error;

          if (!error) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(422).send(error.details[0].message));

        case 3:
          id = req.params.id;
          data = req.body;
          _context4.next = 7;
          return regeneratorRuntime.awrap(Customer.findByIdAndUpdate(id, {
            firstname: data.firstname,
            lastname: data.lastname,
            phoneNumber: data.phoneNumber,
            address: data.address,
            cnic: data.cnic
          }, {
            "new": true
          }));

        case 7:
          customer = _context4.sent;

          if (customer) {
            _context4.next = 10;
            break;
          }

          return _context4.abrupt("return", res.status(404).send('Customer Not Found'));

        case 10:
          res.redirect('/');

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var getDeleteCustomerView = function getDeleteCustomerView(req, res, next) {
  var id, onecustomer;
  return regeneratorRuntime.async(function getDeleteCustomerView$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Customer.findById(id).exec());

        case 4:
          onecustomer = _context5.sent;
          res.render('deleteCustomer', {
            customer: onecustomer
          });
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(400).send(_context5.t0.message);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var deleteCustomer = function deleteCustomer(req, res, next) {
  var id, customer;
  return regeneratorRuntime.async(function deleteCustomer$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Customer.findByIdAndRemove(id));

        case 4:
          customer = _context6.sent;

          if (customer) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", res.status(404).send('Customer not Found'));

        case 7:
          res.redirect('/');
          _context6.next = 13;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(400).send(_context6.t0.message);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  getAllCustomers: getAllCustomers,
  getAddCustomerView: getAddCustomerView,
  addCustomer: addCustomer,
  getUpdateCustomerView: getUpdateCustomerView,
  updateCustomer: updateCustomer,
  getDeleteCustomerView: getDeleteCustomerView,
  deleteCustomer: deleteCustomer
};