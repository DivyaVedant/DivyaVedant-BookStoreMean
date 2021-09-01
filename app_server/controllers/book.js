const response = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderBookList = function (req, res, responseBody) {
    res.render('list', { books: responseBody, title: 'gita book store' });
};
const booksList = function (req, res) {
    const path = '/api/books';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderBookList(req, res, body);

    });
};


const _renderCreatePage = function (req, res) {
    res.render('new', {
        title: "Create new book"
    });
};
const addNewBook = function (req, res) {
    _renderCreatePage(req, res);
};
const doAddNewBook = function (req, res) {
    const path = '/api/books';
    const postdata = {
            Title: req.body.Title,
            Author: req.body.Author,
            bookEdition: req.body.bookEdition,
            price: req.body.price,
            description: req.body.description,
            rating: req.body.rating
    };

    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/list/');
            }
        });
};


const _renderBookListPage = function (req, res, responseBody) {
    res.render('booklist', { books: responseBody });
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('details', { currentBook: responseBody });
};
 
const showBooks = function (req, res) {

    const path = '/api/books';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderBookListPage(req, res, body);

    });
};

const bookDetail = function (req, res) {
    const path = `/api/books/${req.params.bookid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, response, body) => {
        _renderDetailPage(req, res, body);

    });
};

module.exports = {
    booksList,
    addNewBook,
    doAddNewBook,
    bookDetail,
    //showBooks
};