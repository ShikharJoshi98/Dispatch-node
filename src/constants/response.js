function successResponse(res, data, message, statusCode) {
    return res
        .status(statusCode)
        .json({
            success: true,
            message: message,
            data: data,
        });
}

function errorResponse(res, message, statusCode) {
    return res
        .status(statusCode)
        .json({
            error: message,
            success: false,
        });
}

module.exports = {
    successResponse,
    errorResponse
}