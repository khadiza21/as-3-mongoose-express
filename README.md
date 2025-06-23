# 📚 Library Management API

A backend REST API built using **Express**, **TypeScript**, and **MongoDB (Mongoose)** to manage books and borrowing functionalities in a library system.

---

## Live Demo

[ Live Deployment Link](https://type-express-mongoose.vercel.app/api/borrow)

---

## Github Link

[ Github Repository](https://github.com/khadiza21/as-3-mongoose-express.git)

---

## Features

- Create, read, update, and delete books
- Borrow books with business logic enforcement
- Aggregation pipeline to summarize borrowed books
- Schema validation with Mongoose
- Mongoose middleware (pre, post)
- Mongoose static and instance methods
- Filtering, sorting, and pagination support
- Professional error response format

---

## 🛠️ Tech Stack

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Validation & Schema**: Mongoose Validators
- **Environment**: Node.js

---

### 1. Clone the project

```bash

git clone https://github.com/khadiza21/as-3-mongoose-express.git

```

### 2. Install dependencies

```
npm install

```

## 4. Run the development server

```
npm run dev
```

## 5. Build for production

```
npm run build
npm start
```

🔌 **API Endpoints**

📘 **Book Routes**

| Method | Endpoint       | Description                               |
| ------ | -------------- | ----------------------------------------- |
| POST   | /api/books     | Create a new book                         |
| GET    | /api/books     | Get all books (with filters, sort, limit) |
| GET    | /api/books/:id | Get book by ID                            |
| PUT    | /api/books/:id | Update book by ID                         |
| DELETE | /api/books/:id | Delete book                               |

📖 **Borrow Routes**

| Method | Endpoint    | Description                              |
| ------ | ----------- | ---------------------------------------- |
| POST   | /api/borrow | Borrow a book with due date & quantity   |
| GET    | /api/borrow | View borrowed book summary (aggregation) |

---

## 📂 Project Structure

<pre> ├── <b>src/</b> │ ├── <b>config/</b> # Database connection config │ │ └── index.ts │ ├── <b>controllers/</b> # Controller functions │ │ ├── book.controller.ts │ │ └── borrow.controller.ts │ ├── <b>middlewares/</b> # Custom error middleware │ │ └── error.middleware.ts │ ├── <b>models/</b> # Mongoose models and schemas │ │ ├── book.model.ts │ │ └── borrow.model.ts │ ├── <b>routes/</b> # API routes │ │ ├── book.routes.ts │ │ └── borrow.routes.ts ├── <b>app.ts</b> # Express app config (outside src) ├── <b>server.ts</b> # Entry point for the server ├── <b>package.json</b> ├── <b>tsconfig.json</b> ├── <b>.eslintrc.js</b> └── <b>README.md</b> # Project documentation </pre>

👨‍💻 **Author**

👨‍🎓 Name: Khadiza  
💻 GitHub: [@khadiza21](https://github.com/khadiza21)  
📧 Email: bibikhadiza4740@gmail.com

<!-- type-mongo -->
<!-- TJ71jJP6XgtC6vDg -->

// npm run build
// npm i -g vercel
// vercel --prod
