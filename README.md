# 📚 Book Review API

A clean and modular RESTful API built using Node.js, Express, and MongoDB for managing books and reviews. Includes secure user authentication using JWT.

---

## 🔧 Project Setup

Here’s how to get started with this project on your local machine:

1. **Clone the repository**
```bash
git clone https://github.com/rahul-10-byte/book-review-api.git
cd book-review-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Add environment variables**

Create a `.env` file in the root directory and add:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookdb
JWT_SECRET=your_secret_key
```

4. **Run MongoDB**

Make sure MongoDB is running. If you’re using it locally:
```bash
mongod
```

5. **Start the server**
```bash
npm start
```

## 🧪 How to Test the API

You can use tools like Postman or `curl` to test the API.

### ➕ Signup
```bash
POST /api/auth/signup
```
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "secret123"
}
```

### 🔐 Login
```bash
POST /api/auth/login
```
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```
_This will return a token to use in the Authorization header._

---

## 📘 Book Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/api/books` | List all books (supports `?page` & `limit`) |
| POST   | `/api/books` | Add a new book (requires auth) |
| GET    | `/api/books/:id` | Get book details, avg rating & paginated reviews |
| GET    | `/api/books/search?q=title` | Search books by title or author |

---

## ⭐ Review Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/books/:id/reviews` | Add a review (one per user) |
| PUT    | `/api/reviews/:id` | Edit your review |
| DELETE | `/api/reviews/:id` | Delete your review |

---

## 📦 Sample cURL Requests

### Create a new book
```bash
curl -X POST http://localhost:3000/api/books \
-H "Authorization: Bearer <your_token>" \
-H "Content-Type: application/json" \
-d '{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "description": "A book about building good habits."
}'
```

---


## 🗂️ Database Schema

**User**
```js
{
  username: String,
  email: String,
  password: String
}
```

**Book**
```js
{
  title: String,
  author: String,
  genre: String,
  description: String
}
```

**Review**
```js
{
  user: ObjectId,
  book: ObjectId,
  rating: Number,
  comment: String
}
```

---

Thanks for checking this out! ✨
