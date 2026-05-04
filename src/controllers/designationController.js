const { designationService } = require("../services");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const designation = await designationService.createDesignation(req.body);
        successResponse(res, designation, "Designation created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create
}