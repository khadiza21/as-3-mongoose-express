"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("./middleware/error.middleware");
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const borrow_routes_1 = __importDefault(require("./routes/borrow.routes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(error_middleware_1.errorHandler);
// route
app.get('/', (req, res) => {
    res.send('Mongoose-Express-TypeScript');
});
app.use('/api/books', book_routes_1.default);
app.use('/api/borrow', borrow_routes_1.default);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
