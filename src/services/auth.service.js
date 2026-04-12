const logger = require("../config/logger");
const STATUS_CODES = require("../constants/httpStatusCodes");
const { AuthRepository } = require("../repositories");
const AppError = require("../utils/error");

const authRepository = new AuthRepository();

async function registerUser(data) {
    try {
        const user = await authRepository.create(data);
        return user;
    } catch (error) {
        logger.error('Error in registering user', error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new AppError('User already exists', STATUS_CODES.CONFLICT);
        }
        if (error.name === 'SequelizeValidationError') {
            throw new AppError('Invalid email', STATUS_CODES.CONFLICT);
        }
        throw new AppError('Error in registering User', STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    registerUser
}