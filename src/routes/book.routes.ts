import express from 'express';
import { createBook, deleteBook, getBookById, getBooks, updateBook } from '../controller/book.controllers';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);

router.get('/:bookId', getBookById);

router.put('/:bookId', updateBook);

router.delete('/:bookId', deleteBook);

export default router;