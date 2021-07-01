"use strict";

var express = require('express');

var _require = require('../controllers/customerController'),
    getAllCustomers = _require.getAllCustomers,
    getAddCustomerView = _require.getAddCustomerView,
    addCustomer = _require.addCustomer,
    getUpdateCustomerView = _require.getUpdateCustomerView,
    updateCustomer = _require.updateCustomer,
    getDeleteCustomerView = _require.getDeleteCustomerView,
    deleteCustomer = _require.deleteCustomer;

var router = express.Router();
router.get('/', getAllCustomers);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomer', addCustomer);
router.get("/updateCustomer/:id", getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);
router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);
module.exports = {
  routes: router
};