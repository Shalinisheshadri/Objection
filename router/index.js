const express = require('express');
const CustomerController = require('../controller/customer');

const router = express.Router();
router.get('/customer/:id', CustomerController.getCustomer);

module.exports = router;