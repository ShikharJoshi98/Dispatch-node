const { AuthRepository, RoleRepository } = require("../repository");
const logger = require("../utils/logger");

const authRepository = new AuthRepository();
const roleRepository = new RoleRepository();

const createUser = async (data) => {
    try {
        const response = await authRepository.create(data);
        return response;
    } catch (error) {
        logger.error("Error in createUser(auth service)", error);
        throw new Error('Error in creating User');
    }
}

const createRole = async (data) => {
    try {
        const response = await roleRepository.create(data);
        return response;
    } catch (error) {
        logger.error("Error in createRole(auth service)", error);
        throw new Error('Error in creating Role');
    }
}

module.exports = {
    createUser,
    createRole
}