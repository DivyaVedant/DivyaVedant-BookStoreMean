const express = require('express');
const router = require('../../app_server/routes');
const routes = express.Router();
const ctrlBook = require('../controllers/book');

router.get('/books',ctrlBook.getBooks);
router.post('/books',ctrlBook.createBook);

router.get('/books/:bookid',ctrlBook.getSingleBook);
router.put('/books/:bookid',ctrlBook.updateBook);
router.delete('/books/:bookid',ctrlBook.deleteBook);

module.exports = router;