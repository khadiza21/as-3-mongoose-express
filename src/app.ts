import express from 'express';
import { errorHandler } from './middleware/error.middleware';
import bookRoutes from './routes/book.routes';
import borrowRoutes from './routes/borrow.routes';
const app = express();

// Middleware
app.use(express.json());
app.use(errorHandler);

// route
app.get('/', (req, res) => {
  res.send('Mongoose-Express-TypeScript');
});

app.use('/api/books', bookRoutes);

app.use('/api/borrow', borrowRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
export default app;