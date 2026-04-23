const STATUS_CODE = require("../constant/statusCode");
const logger = require("../utils/logger");
const { errorResponse } = require("../utils/response");

const validateSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    logger.error("validation error", error);
    if (error) {
        const message = "";
        return errorResponse(res, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
    next();
}

module.exports = validateSchema;