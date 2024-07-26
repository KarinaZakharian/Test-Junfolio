const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');


router.get('/books', mainController.getBooks);

router.get('/book/:id', mainController.getBook);

router.post('/books', mainController.createBook);
router.delete('/books/:id', mainController.deleteBook);

module.exports = router;
