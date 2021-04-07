const yup = require('yup')
const bcrypt = require('bcryptjs');

const userModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(6)
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Os dados não foram validados' });
        }

        const userExists = await userModel.findOne({ where: { email: req.body.email } });

        if (userExists) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        req.body.password_hash = await bcrypt.hash(req.body.password, 8);

        const user = await userModel.create(req.body);

        const { id, name, email } = user;

        return res.json({
            id,
            name,
            email
        });
    },

    async update(req, res) {
        const schema = yup.object().shape({
            name: yup.string(),
            email: yup.string().email(),
            password: yup.string().min(6),
            oldPassword: yup.string()
                .min(6)
                .when('password', (password, field) =>
                    password ? field.required() : field
                ),
            confirmPassword: yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Os dados não foram validados' });
        }

        const { email, oldPassword } = req.body;

        const user = await userModel.findByPk(req.userId);

        if (email !== user.email) {
            const userExists = await userModel.findOne({ where: { email } });

            if (userExists) {
                return res.status(400).json({ error: 'Usuário já existe' });
            }
        }

        if (oldPassword) {
            if (!(await bcrypt.compare(oldPassword, user.password_hash))) {
                return res.status(401).json({ error: 'A senha não está correta' });
            }
            req.body.password_hash = await bcrypt.hash(req.body.password, 8);
        }

        const { id, name } = await userModel.update(req.body, {
            where: { id: req.userId },
        });

        return res.json({
            id,
            name
        });
    }
}