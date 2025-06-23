"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.createBook = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
// Create a new book
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Validation failed';
        res.status(400).json({
            success: false,
            message: 'Validation failed',
            error: errorMessage,
        });
    }
});
exports.createBook = createBook;
// Get all books with filters, sorting, and limit
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = 'createdAt', sort = 'asc', limit = '10', } = req.query;
        const query = {};
        // Filtering by genre
        if (filter) {
            query.genre = filter;
        }
        // Parse limit to number
        const limitNumber = parseInt(limit, 10);
        const books = yield book_model_1.default.find(query)
            .sort({ [sortBy]: sort === 'asc' ? 1 : -1 })
            .limit(limitNumber);
        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            data: books,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error fetching books';
        res.status(500).json({
            success: false,
            message: 'Error fetching books',
            error: errorMessage,
        });
    }
});
exports.getBooks = getBooks;
// Get book by ID
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const book = yield book_model_1.default.findById(bookId);
        if (!book) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: book,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Invalid book ID';
        res.status(400).json({
            success: false,
            message: 'Invalid book ID',
            error: errorMessage,
        });
    }
});
exports.getBookById = getBookById;
// Update a book
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const updatedBook = yield book_model_1.default.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updatedBook,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to update book';
        res.status(400).json({
            success: false,
            message: 'Failed to update book',
            error: errorMessage,
        });
    }
});
exports.updateBook = updateBook;
// Delete a book
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const deletedBook = yield book_model_1.default.findByIdAndDelete(bookId);
        if (!deletedBook) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: null,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to delete book';
        res.status(500).json({
            success: false,
            message: 'Failed to delete book',
            error: errorMessage,
        });
    }
});
exports.deleteBook = deleteBook;
