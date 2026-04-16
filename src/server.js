require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || "development"}`
});
const express = require('express');

const { serverConfig, dbConfig } = require('./config');

const app = express();

app.listen(serverConfig.PORT, () => {
    console.log(`Server listening on port ${serverConfig.PORT}`);
    dbConfig.connectDB();
})