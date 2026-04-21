const { RoleRepository } = require("../repository");
const logger = require("../utils/logger");

const roleRepository = new RoleRepository();

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
    createRole
}
