const express = require('express');
const { serverConfig } = require('./config');
const logger = require('./utils/logger');
const sequelize = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(serverConfig.PORT,async () => {
    try {
        logger.info(`Server listening at ${serverConfig.PORT}`);
        await sequelize.authenticate();
        logger.info('DB has been connected successfully');
    } catch (error) {
        logger.error('Error in starting server', error.message);
        process.exit(1);
    }
});