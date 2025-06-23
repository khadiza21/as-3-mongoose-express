"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, _next) => {
    let status = 500;
    let message = 'Something went wrong';
    if (err instanceof Error) {
        message = err.message;
    }
    if (typeof err === 'object' && err !== null && 'status' in err) {
        status = err.status || 500;
    }
    res.status(status).json({
        success: false,
        message,
        error: err,
    });
};
exports.errorHandler = errorHandler;
