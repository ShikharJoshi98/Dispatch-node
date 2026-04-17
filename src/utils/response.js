const successResponse = (res, message, data, statusCode) => {
    return res
        .status(statusCode)
        .json({
            success: true,
            message: message,
            data: data
        });
}

const errorResponse = (res, message, statusCode) => {
    return res
        .status(statusCode)
        .json({
            success: false,
            message: message
        });
}

module.exports = {
    successResponse,
    errorResponse
};