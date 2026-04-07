function successResponse(res, data, message, statusCode) {
    return res
        .status(statusCode)
        .json({
            success: true,
            message: message,
            data: data,
        });
}

function errorResponse(res, error, message, statusCode) {
    return res
        .status(statusCode)
        .json({
            error: error,
            success: false,
            message: message,
        });
}

module.exports = {
    successResponse,
    errorResponse
}