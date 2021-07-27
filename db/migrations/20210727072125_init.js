//apply changes
exports.up = function (knex) {
  return knex.schema
  .createTable('customer', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.timestamps(true,true);
  })
  .createTable('order', (table) =>{
      table.increments();
      table.string('name').notNullable();
      table.integer('customerId').references('id').inTable('customer');
      table.timestamps(true,true);
  });
};
// rollback the changes
exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('customer')
  .dropTableIfExists('order');
};
