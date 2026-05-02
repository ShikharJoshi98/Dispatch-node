const { authService } = require("../services");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body);
        successResponse(res, user, "User created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create
}