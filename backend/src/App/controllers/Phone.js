const phoneModel = require('../models/Phone');

module.exports = {
    async store(req, res){

        console.log(req.body);
        const phone = await phoneModel.create(req.body);

        return res.json(phone);
    },

    async update(req, res) {
        const phone = await phoneModel.update(req.body, {
            where: { id: req.params.id }
        });

        const { id, number, contact_id } = phone;

        return res.json({
            id,
            number,
            contact_id
        });
    },

    async delete(req, res) {
        const phone = await phoneModel.findByPk(req.params.id);

        await phone.destroy();

        return res.json({ message: 'Número deletado com sucesso' });
    }
}