var express = require('express');
var router = express.Router();
const ctrlAbout = require('../controllers/about');
const ctrlBookList = require('../controllers/book');
const ctrlDisplay = require('../controllers/display');

router.get('/',ctrlDisplay.index);
router.get('/about' , ctrlAbout.about);
router.get('/list' , ctrlBookList.booksList);
router.get('/bookdetails/:bookid', ctrlBookList.bookDetail);
router.route('/new')
    .get(ctrlBookList.addNewBook)
    .post(ctrlBookList.doAddNewBook);
router.get('/display' , ctrlDisplay.display);


module.exports = router;
