const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const rta = await models.Customer.findAll({
      include:['user']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if (!user) {
      throw boom.notFound('Customer not found');
    }
    return user;
  }

  async create(data) {
    // al tener el modelo listo, se puede hacer en una sola liena como se muestra a continuación
    const newCustomer = await models.Customer.create(data,{include:['user']});
    // esta es una forma
    // const newUser = await models.User.create(data.user);
    // const newCustomer = await models.Customer.create({
    //   ...data,
    //   userId: newUser.id,
    // });
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = CustomerService;
