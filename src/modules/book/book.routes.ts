import express from 'express';
import { createBook, deleteBook, getAllBooks, getBookById, updateBook,  } from './book.controller';

const router = express.Router();

router.post('/api/books', createBook);
router.get('/api/books', getAllBooks); 
router.get('api/books/:bookId', getBookById);
router.put('/api/books/:bookId', updateBook);
router.delete('/api/books/:bookId', deleteBook);

export default router;
