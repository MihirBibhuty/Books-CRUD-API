// routes/books.js  

const express = require('express');

const router = express.Router();

const {
    getAllBooks,
    addNewBook,
    updateBook
} = require('../controllers/books');

const { validateNewBook, validateUpdate } = require('../middleware/inputValidation');

router.route('/')
    .get(getAllBooks)
    .post(validateNewBook, addNewBook);

router.route('/:id')
    .put(validateUpdate, updateBook);

module.exports = router;