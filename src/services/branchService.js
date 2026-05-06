const { BranchRepository } = require("../repositories");
const AppError = require("../utils/appError");
const logger = require("../utils/logger");
const STATUS_CODE = require("../utils/statusCode");

const branchRepository = new BranchRepository();

const createBranch = async (data) => {
        try {
            const newBranch = await branchRepository.create(data);
            return newBranch;
        } catch (error) {
             logger.error("Error creating branch", {message: error.message, stack: error.stack});
            if (error.name == 'SequelizeUniqueConstraintError') {               
                throw new AppError("Branch already exists", STATUS_CODE.CONFLICT);
            }
            throw new AppError("Error in creating branch", STATUS_CODE.INTERNAL_SERVER_ERROR);
        }
};

module.exports = {
    createBranch
};