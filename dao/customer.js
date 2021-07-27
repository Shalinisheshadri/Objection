const Customer = require('../db/models/customer');

class Customerdao {
  findById(id) {
    return Customer.query().findById(id).withGraphFetched('order');
  }
}

module.exports = new Customerdao();