const successResponse = (res, data, message, statusCode) => {
    return res
        .status(statusCode)
        .json({
            success: true,
            message: message,
            data,
            statusCode: statusCode || 200
        });
}

module.exports = successResponse;