import { Request, Response } from 'express';
import { Book } from './book.model';

export const createBook = async (req: Request, res: Response) => {
  try {
    const result = await Book.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: result
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: error
    });
  }
};



export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { filter, sortBy = 'createdAt', sort = 'desc', limit = '10' } = req.query;

    const filterCondition: any = {};
    if (filter) {
      filterCondition.genre = filter;
    }

    const sortCondition: any = {};
    sortCondition[String(sortBy)] = sort === 'asc' ? 1 : -1;

    const books = await Book.find(filterCondition)
      .sort(sortCondition)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve books',
      error: error
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
        error: {
          message: `No book found with id ${bookId}`
        }
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve book',
      error
    });
  }
};


export const updateBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const updateData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, {
      new: true, 
      runValidators: true 
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
        error: {
          message: `No book found with id ${bookId}`
        }
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update book',
      error
    });
  }
};



export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
        error: {
          message: `No book found with id ${bookId}`
        }
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete book',
      error
    });
  }
};


