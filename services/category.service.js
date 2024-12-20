const pool = require('../libs/postgres.pool');

class CategoryService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    let { name, image } = data;
    if (!image) {
      image = 0;
    }

    const values = [name, image];
    const query = 'INSERT INTO categories(name, image) VALUES ($1, $2)';
    await this.pool.query(query, values);

    return {
      data,
    };
  }

  async find() {
    const query = 'SELECT id, name, image FROM categories order by id asc';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    // const query = `SELECT id, name, image FROM categories WHERE id = ${id}`;
    // const rta = await this.pool.query(query);
    const query = 'SELECT id, name, image FROM categories WHERE id = $1';
    const rta = await this.pool.query(query, [id]);
    return rta.rows;
  }

  async update(id, changes) {
    const dataUpdate = [];
    const setQuery = [];

    Object.entries(changes).forEach((entrie, index) => {
      setQuery.push(entrie[0] + ` = $${index + 1}`);
      dataUpdate.push(entrie[1]);
    });

    const query = `UPDATE categories SET ${setQuery.join(', ')} WHERE id = ${id}`;
    await this.pool.query(query, dataUpdate);

    return {
      id,
      ...changes,
    };
  }

  async delete(id) {
    const query = 'DELETE FROM categories WHERE id = $1';
    await this.pool.query(query, [id]);
    return { id };
  }
}

module.exports = CategoryService;
