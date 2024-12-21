const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = await models.User.findByPk(id); // con esta función hacemos la llamada por id o pk
    return rta;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
