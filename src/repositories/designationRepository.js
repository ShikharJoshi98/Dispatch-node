const Designation = require("../models/designation");
const CrudRepository = require("./crudRepository");

class DesignationRepository extends CrudRepository{
    constructor() {
        super(Designation);
    }
}

module.exports = DesignationRepository;