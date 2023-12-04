// controllers/books.js

const Book = require('../models/Book');

// GET all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// POST new book 
exports.addNewBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// PUT update book
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.status(200).json(book);

    } catch (err) {
        res.status(400).json({ error: err });
    }
};