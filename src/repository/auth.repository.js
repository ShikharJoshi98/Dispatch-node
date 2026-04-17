const { User } = require("../models");
const CrudRepository = require("./crud.repository");

class AuthRepository extends CrudRepository{
    constructor() {
        super(User);
    }
}

module.exports = AuthRepository;