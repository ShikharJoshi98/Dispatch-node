const { errorResponse } = require("../constants/response");
const AppError = require("../utils/error");
const STATUS_CODE = require('../constants/httpStatusCodes');
const logger = require("../config/logger");

async function validateRegister(req, res, next) {
    if (!req.body) {
        logger.error('Request Body is missing');
        return errorResponse(res, 'Request Body is missing', STATUS_CODE.BAD_REQUEST);
    }
    if (!req.body.email) {
        logger.error('Email is missing');
        return errorResponse(res, 'Email is missing', STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    if (!req.body.name) {
        logger.error('Name is missing');
        return errorResponse(res, 'Name is missing', STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    if (!req.body.password) {
        logger.error('Password is missing');
        return errorResponse(res, 'Password is missing', STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    next();
}

module.exports = {
    validateRegister
}