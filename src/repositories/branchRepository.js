const Branch = require("../models/branch");
const CrudRepository = require("./crudRepository");

class BranchRepository extends CrudRepository{
    constructor() {
        super(Branch);
    }
}

module.exports = BranchRepository;