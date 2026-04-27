const express = require('express');
const { serverConfig } = require('./config');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(serverConfig.PORT, () => {
    logger.info(`Server listening at ${serverConfig.PORT}`); 
});