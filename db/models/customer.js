const { Model } = require('objection');

class Customer extends Model {
  static get tableName() {
    return 'customer';
  }

  static get relationMappings(){
      const Order= require('./order');
      return{
          order:{
              relation:Model.HasManyRelation,
              modelClass:Order,
              join:{
                  from: 'order.customerId',
                  to:'customer.id',
              },
          },
      };
  }
}
module.exports = Customer;