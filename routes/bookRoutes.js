const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { addBook, getBooks, getBookById, searchBooks } = require('../controllers/bookController');
const { addReview } = require('../controllers/reviewController');

router.get('/', getBooks);
router.get('/search', searchBooks);
router.post('/', auth, addBook);
router.get('/:id', getBookById);
router.post('/:id/reviews', auth, addReview);

module.exports = router;
