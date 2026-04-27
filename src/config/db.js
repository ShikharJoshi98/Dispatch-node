const { Sequelize } = require('sequelize');
const serverConfig = require('./serverConfig');

const sequelize = new Sequelize(serverConfig.DB_DATABASE, serverConfig.DB_USERNAME, serverConfig.DB_PASSWORD, {
    host: serverConfig.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;