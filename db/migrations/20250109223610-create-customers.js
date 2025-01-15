'use strict';

const { CustomerShema, CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerShema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
