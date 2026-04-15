const { Sequelize } = require("sequelize")
const config = require('./database.config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: "mysql"
    });

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('DB connection estabilished successfully');
    } catch (error) {
        console.error('Unable to connect to the database', error);
        process.exit(1);
    }
}

module.exports = {
    connectDB,
    sequelize
};