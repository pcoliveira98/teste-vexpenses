const addressModel = require('../models/Address');

module.exports = {
    // async store(req, res){
    //     const address = await addressModel.create(req.body);

    //     return res.json(address);
    // },

    async update(req, res) {
        const address = await addressModel.update(req.body, {
            where: { id: req.params.id }
        });

        return res.json(address);
    },

    async delete(req, res) {
        const address = await addressModel.findByPk(req.params.id);

        await address.destroy();

        return res.json({ message: 'Endereço deletado com sucesso' });
    }
}