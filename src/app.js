const cookieParser = require('cookie-parser');
const express = require('express');

const apiRoutes = require('./routes');
const logger = require('./config/logger');
const errorHandler = require('./middlewares/errorhandler');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

app.use((req, res, next) => {
    logger.info(`Received ${req.method} request to ${req.url}`);
    next();
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    })
});

app.use('/api', apiRoutes);


module.exports = app;

