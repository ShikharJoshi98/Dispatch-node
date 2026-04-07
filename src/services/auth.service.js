const STATUS_CODES = require("../constants/httpStatusCodes");
const { AuthRepository } = require("../repositories");
const AppError = require("../utils/error");

const authRepository = new AuthRepository();

async function registerUser(data) {
    try {
        const user = await authRepository.create(data);
        return user;
    } catch (error) {
        throw AppError('Error in registering User', STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    registerUser
}