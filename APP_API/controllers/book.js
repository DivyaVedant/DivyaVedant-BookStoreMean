const mongoose = require('mongoose');
const Books = mongoose.model('Books');

const getBooks = function(req,res) {
    Books.find().exec(function (err, data) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(200).json(data);
    });
};

const createBook = function(req,res) {
    Books.create({
        Title: req.body.Title,
        Author: req.body.Author,
        bookEdition: req.body.bookEdition,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
    }, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(data);
        }
    })
};

const getSingleBook = function(req,res) {
    Books.findById(req.params.bookid)
        .exec((err, data) => {
            if (!data) {
                return res
                    .status(404)
                    .json({
                        "message": "book not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(data);
        });
};

const updateBook = function(req,res) {
    if (!req.params.bookid) {
        res.status(404).json({ "message": "Not found, bookid is required" })
        return;
    }
    Books.findById(req.params.bookid)
        .exec((err, bookData) => {
            if (!bookData) {
                res.status(404).json({ "message": "bookid not found" });
                return;
            } else if (err) {
                res.status(400).json(err);
                return;
            }

            bookData.Title= req.body.Title;
            bookData.Author= req.body.Author;
            bookData.bookEdition= req.body.bookEdition;
            bookData.price= req.body.price;
            bookData.description= req.body.description;
            bookData.rating = req.body.rating;

            bookData.save((err, book) => {
                if (err) {
                    res.status(404).json(err);
                }
                else {
                    res.status(200).json(book);
                }
            })
        })
};

const deleteBook = function(req,res) {
    const bookid = req.params.bookid;

    if (bookid) {
        Books
            .findByIdAndRemove(bookid)
            .exec((err, bookdata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({ "message": "No bookid" });
    }
};

module.exports={getBooks,createBook,getSingleBook,updateBook,deleteBook};
