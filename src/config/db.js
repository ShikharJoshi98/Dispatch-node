const { Sequelize } = require("sequelize")
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = require("./server.config")

const connectDB = async () => {
    const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOST,
        dialect: "mysql"
    });
    try {
        await sequelize.authenticate();
        console.log('DB connection estabilished successfully');
    } catch (error) {
        console.error('Unable to connect to the database', error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
};