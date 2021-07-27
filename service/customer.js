const Customerdao = require('../dao/customer');

class CustomerService {
  getCustomer(id) {
    return Customerdao.findById(id);
  }
}

module.exports = new CustomerService();