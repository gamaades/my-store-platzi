const config = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
console.log(URI);

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres', // esta es la conexion a postgres
  },
  production: {
    url: URI,
    dialect: 'postgres', // esta es la conexion a postgres
  },
};
