const { AuthRepository } = require("../repository");
const generateUsername = require("../utils/generateUsername");
const logger = require("../utils/logger");

const authRepository = new AuthRepository();

const createUser = async (data) => {
    try {        
        let newUsername;
        let userExist;
        do {
            newUsername = generateUsername(data.first_name, data.last_name);
            userExist = await authRepository.getByUsername(newUsername);
        } while (userExist)
        
        data.username = newUsername;
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