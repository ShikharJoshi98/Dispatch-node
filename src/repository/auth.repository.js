const { User } = require("../models");
const CrudRepository = require("./crud.repository");

class AuthRepository extends CrudRepository{
    constructor() {
        super(User);
    }
    async getByUsername(username) {
        const response = await User.findOne({
            where: {
                username: username
            }
        });
        return response;
    }
}

module.exports = AuthRepository;