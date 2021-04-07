const contactModel = require('../models/Contact');
const phoneModel = require('../models/Phone');
const addressModel = require('../models/Address');
const userModel = require('../models/User');
const fileModel = require('../models/File');

const phoneController = require('../controllers/Contact');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const contacts = await contactModel.findAll({
            where: {
                user_id: req.userId
            },
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: fileModel,
                    as: 'avatar',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        return res.json(contacts);
    },

    async getOne(req, res) {
        const contact = await contactModel.findByPk(req.params.id, {
            include: [{
                model: phoneModel,
                as: 'contact_phones'
            },
            {
                model: addressModel,
                as: 'contact_addresses'
            }]
        })

        return res.json(contact);
    },

    async store(req, res) {

        const { name, phones, ...address } = req.body;

        const newContact = await contactModel.create({ name, user_id: req.userId });

        if (phones) {
            phones.map(async phone => {
                await phoneModel.create({ number: phone, contact_id: newContact.id });
            })
        }

        if (address) {
            address.contact_id = newContact.id
            await addressModel.create(address);
        };

        return res.json(newContact);
    },

    async update(req, res) {
        const contact = await contactModel.update(req.body, {
            where: { id: req.params.id },
        });

        return res.json(contact);
    },

    async delete(req, res) {
        const contact = await contactModel.findByPk(req.params.id, {
            include: [{
                model: phoneModel,
                as: 'contact_phones'
            }, {
                model: addressModel,
                as: 'contact_addresses',
            }]
        });

        if (!contact) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        console.log(contact);

        await contact.destroy();

        return res.json({ message: 'Contato excluído com sucesso' });
    }

}