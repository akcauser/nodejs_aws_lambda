const BookDataHelper = require('./../helpers/BookDataHelper');

class BookService {
    getAll = function () {
        return BookDataHelper.books;
    }
}

module.exports = BookService;