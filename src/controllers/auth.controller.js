const STATUS_CODE = require("../constant/statusCode");
const { authService, roleService } = require("../services");
const { successResponse, errorResponse } = require("../utils/response");

const registerRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        return successResponse(res, 'Role created Successfully', role, STATUS_CODE.CREATED);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const register = async (req, res) => {
    try {
        const user = await authService.createUser(req.body);
        return successResponse(res, 'User created Successfully', user, STATUS_CODE.CREATED);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    register,
    registerRole
}