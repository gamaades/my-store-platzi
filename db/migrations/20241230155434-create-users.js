'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Se encarga de crear la tabla correspondiente al modelo definido.
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  // Revertir el cambio eliminando la tabla creada.
  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  },
};

// Nota: En este archivo pueden incluirse múltiples modelos, si se requiere, para definir las migraciones asociadas a cada uno.
