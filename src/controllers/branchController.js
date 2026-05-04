const { branchService } = require("../services");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const branch = await branchService.createBranch(req.body);
        successResponse(res, branch, "Branch created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create
}