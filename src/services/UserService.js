const UserDataHelper = require('./../helpers/UserDataHelper');

class UserService {
    getAll = function () {
        return UserDataHelper.users;
    }
}

module.exports = UserService;