const yup = require('yup');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = require('../models/User');
const authConfig = require('../../config/auth');

module.exports = {
    async store(req, res) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Os dados não foram validados' });
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const passwordCheck = await bcrypt.compare(password, user.password_hash);

        if (!passwordCheck) {
            return res.status(401).json({ error: 'A senha não está correta' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })

    }
};