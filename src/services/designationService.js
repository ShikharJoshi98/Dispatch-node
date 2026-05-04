const { DesignationRepository } = require("../repositories");
const AppError = require("../utils/appError");
const logger = require("../utils/logger");
const STATUS_CODE = require("../utils/statusCode");

const designationRepository = new DesignationRepository();

const createDesignation = async (data) => {
        try {
            const newDesignation = await designationRepository.create(data);
            return newDesignation;
        } catch (error) {
             logger.error("Error creating designation", {message: error.message, stack: error.stack});
            if (error.name !== 'SequelizeUniqueConstraintError') {               
                throw new AppError("Designation already exists", STATUS_CODE.CONFLICT);
            }
            throw new AppError("Error in creating designation", STATUS_CODE.INTERNAL_SERVER_ERROR);
        }
};

module.exports = {
    createDesignation
};