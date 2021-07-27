
exports.seed = async function(knex) {
  // Trauncate the existing table values
  await knex.raw('TRUNCATE "customer" CASCADE')
  await knex.raw('TRUNCATE "order" CASCADE')
 
  // insertion of seed for customer table
  await knex('customer').insert([
    {
      id:1,
      name:"Suriya",
      email:"suriya23@gmail.com"
    },
    {
      id:2,
      name:"Karthi",
      email:"karthi@gmail.com"
    },
    {
      id:3,
      name:"Shiva Karthikeyan",
      email:"sk@gmail.com"
    }
  ]);

  // insertion of seed for order table
  await knex('order').insert([
    {
      id:1,
      name:"Order no 1",
      customerId:1
    },
    {
      id:2,
      name:"Order no 2",
      customerId:2
    },
    {
      id:3,
      name:"Order no 3",
      customerId:1
    }
  ]);

};
