require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || "development"}`
});
const express = require('express');

const { serverConfig, dbConfig } = require('./config');
const logger = require('./utils/logger');
const apiRoutes = require('./routes');
require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const startServer = async () => {
    try {
        await dbConfig.connectDB();
        await dbConfig.sequelize.sync();
        // await dbConfig.sequelize.sync({ alter: true });
        // await dbConfig.sequelize.sync({ force: true });
        logger.info("All models synced successfully");
        app.listen(serverConfig.PORT, () => {
            logger.info(`Server listening on port ${serverConfig.PORT}`);
        });
    } catch (error) {
        logger.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();

