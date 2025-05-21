const Book = require('../models/Book');
const Review = require('../models/Review');

exports.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).send('Failed to add book');
    }
};

exports.getBooks = async (req, res) => {
    const { page = 1, limit = 10, author, genre } = req.query;
    const filter = {};
    if (author) filter.author = author;
    if (genre) filter.genre = genre;

    const books = await Book.find(filter)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id }).populate('user', 'username');
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
    res.json({ book, averageRating, reviews });
};

exports.searchBooks = async (req, res) => {
    const query = new RegExp(req.query.q, 'i');
    const books = await Book.find({ $or: [{ title: query }, { author: query }] });
    res.json(books);
};
