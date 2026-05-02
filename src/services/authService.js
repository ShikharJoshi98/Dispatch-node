const { AuthRepository } = require("../repositories");
const AppError = require("../utils/appError");
const generateUsername = require("../utils/generateUsername");
const logger = require("../utils/logger");
const STATUS_CODE = require("../utils/statusCode");

const authRepository = new AuthRepository();

const createUser = async (data) => {
    let newUser;
    let success = false;
    let attempts = 0;
    const maxAttempts = 10;

    do {
        try {
            attempts++;
            const username = generateUsername(data.name);
            data.username = username;

            newUser = await authRepository.create(data);

            success = true;
            return newUser;
        } catch (error) {
            if (error.name !== 'SequelizeUniqueConstraintError' || attempts>=maxAttempts) {
                logger.error("Error creating user", {message: error.message, stack: error.stack});
                throw new AppError("Error in creating user", STATUS_CODE.INTERNAL_SERVER_ERROR);
            }
        }
    } while (!success);
};

module.exports = {
    createUser
};