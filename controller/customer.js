const CustomerService = require('../service/customer');

class CustomerController {
  async getCustomer(req, res, next) {
    try {
      const customer = await CustomerService.getCustomer(req.params.id);
      res.json(customer);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new CustomerController();