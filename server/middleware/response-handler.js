const express = require('express');

module.exports = sendResponse;

function sendResponse(res, status, messageType, message, result = null) {
    const responseObj = {
        status,
        messageType,
        message,
        result
    };
    return res.status(status).json(responseObj);
}