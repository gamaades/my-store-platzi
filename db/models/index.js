const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
// acá tendriamos todos nuestros modelos
// ...
// ...

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  // acá tendriamos todos nuestros modelos
  // ...
  // ...

  // despuues de los init, hay que hacer las asociaciones si es que las tablas los tuvieran.
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
