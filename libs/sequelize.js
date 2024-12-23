// Importamos la clase Sequelize desde el paquete 'sequelize'.
const { Sequelize } = require('sequelize');

// Importamos la configuración de la base de datos desde un archivo externo.
const { config } = require('./../config/config');

// Importamos una función que configura los modelos de la base de datos.
const setupModels = require('./../db/models');

// Codificamos el nombre de usuario y la contraseña para evitar problemas con caracteres especiales en la URI.
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// Construimos la URI de conexión a la base de datos PostgreSQL.
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // esta es la conexion a postgres
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // esta es la conexion a mysql

// Creamos una instancia de Sequelize, configurándola con la URI de conexión y especificando que el dialecto es 'postgres'.
const sequelize = new Sequelize(URI, {
  // dialect: 'postgres', // esta es la conexion a postgres
  dialect: 'mysql', // esta es la conexion a mysql
  logging: console.log, // Activamos el logging para que Sequelize muestre las consultas SQL en la consola.
  // dialectOptions: {
  //   useUTC: false,
  //   timezone: config.timezone, // Usamos la zona horaria desde el archivo config
  // },
  dialectOptions: {
    timezone: '-03:00', // Configuración correcta para MySQL2
    // Si utilizas un servidor remoto con SSL:
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  timezone: '-03:00', // Esto controla la representación local de las fechas
});

// Llamamos a la función que define los modelos en Sequelize, pasándole la instancia de conexión.
setupModels(sequelize);

// Sincronizamos los modelos con la base de datos.
// Esto significa que Sequelize revisará los modelos definidos y se asegurará de que las tablas correspondientes existan en la base de datos.
// Si las tablas no existen, Sequelize las creará. Si ya existen, no hará cambios a menos que se utilice una configuración adicional para forzar la sincronización (e.g., alter o force).
sequelize.sync();

// Exportamos la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación.
module.exports = sequelize;
