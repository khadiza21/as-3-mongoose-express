"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controllers_1 = require("../controller/book.controllers");
const router = express_1.default.Router();
router.post('/', book_controllers_1.createBook);
router.get('/', book_controllers_1.getBooks);
router.get('/:bookId', book_controllers_1.getBookById);
router.put('/:bookId', book_controllers_1.updateBook);
router.delete('/:bookId', book_controllers_1.deleteBook);
exports.default = router;
