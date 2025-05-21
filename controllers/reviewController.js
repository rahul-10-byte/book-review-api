const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const exists = await Review.findOne({ user: req.user._id, book: req.params.id });
    if (exists) return res.status(400).send('You have already reviewed this book');

    const review = new Review({
        ...req.body,
        user: req.user._id,
        book: req.params.id
    });
    await review.save();
    res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
    const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
    if (!review) return res.status(404).send('Review not found');
    Object.assign(review, req.body);
    await review.save();
    res.json(review);
};

exports.deleteReview = async (req, res) => {
    const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!review) return res.status(404).send('Review not found');
    res.send('Review deleted successfully');
};
