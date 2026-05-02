const User = require("../models/User");
const CrudRepository = require("./crudRepository");

class AuthRepository extends CrudRepository{
    constructor() {
        super(User);
    }
}

module.exports = User;