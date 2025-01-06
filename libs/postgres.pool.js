const { Pool } = require('pg');

const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI,
});
// esta igual es una forma de hacer la conexion, pero la que esta arriba es más pro
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'admin',
//   password: 'admin123',
//   database: 'my_store',
// });

module.exports = pool;
