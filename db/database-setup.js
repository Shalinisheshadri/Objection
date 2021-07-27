const knex = require ('knex');
const knexfile = require('./knexfile');
const{Model} =  require('objection');

function initialDb(){
    const db = knex(knexfile.development);
    Model.knex(db);
}

module.exports = initialDb;