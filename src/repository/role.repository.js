const { Roles } = require("../models");
const CrudRepository = require("./crud.repository");

class RoleRepository extends CrudRepository{
    constructor() {
        super(Roles)
    }
}

module.exports = RoleRepository;