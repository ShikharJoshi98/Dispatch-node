const STATUS_CODES = require("../constants/httpStatusCodes");
const { successResponse, errorResponse } = require("../constants/response");
const { authService } = require("../services")

const registerUser = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        return successResponse(res, user, 'Successfully registered', STATUS_CODES.CREATED);
    } catch (error) {
        return errorResponse(res, error, error.statusCode);
    }
};

module.exports = {
    registerUser
}