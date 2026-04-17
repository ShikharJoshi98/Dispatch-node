const { AuthRepository } = require("../repository");
const logger = require("../utils/logger");


const authRepository = new AuthRepository();

const createUser = async (data) => {
    try {
        const response = await authRepository.create(data);
        return response;
    } catch (error) {
        logger.error("Error in createUser(auth service)", error);
        throw new Error('Error in creating User');
    }
}

module.exports = {
    createUser
}