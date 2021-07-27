const {Model} = require('objection')

class Order extends Model{
    static get tableName(){
        return 'order';
    }

    static get relationMappings(){
        const Customer= require('./customer');
        return{
            customer:{
                relation:Model.HasOneRelation,
                modelClass:Customer,
                join:{
                    from: 'customer.id',
                    to:'order.customerId',
                },
            },
        };
    }
  }
module.exports = Order;