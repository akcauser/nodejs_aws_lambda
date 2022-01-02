const BookService = require('./src/services/BookService')
const UserService = require('./src/services/UserService')

exports.handler = function (event) {
    const data = JSON.parse(event.body);

    const map = {
        getUsers: function () {
            return UserService.getAll;
        },
        getBooks: function () {
            return BookService.getAll;
        }
    };

    map[data.method]();
};