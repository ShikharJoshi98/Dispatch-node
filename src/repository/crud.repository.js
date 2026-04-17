class CrudRepository{
    constructor(model) {
        this.model = model;
    }
    
    create(data) {
        const response = await this.model.create(data);
        return response;
    }

    getAll() {
        const response = await this.model.findAll();
        return response;
    }

    get(id) {
        const response = await this.model.findByPk(id);
        return response;
    }

    update(id, data) {
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
    }

    destroy(id) {
        const response = await this.model.destroy({
            where: {
                id:id
            }
        })
    }
}

module.exports = CrudRepository;