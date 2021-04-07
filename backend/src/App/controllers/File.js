const fileModel = require('../models/File');

module.exports = {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await fileModel.create({
            name,
            path,
        });

        return res.json(file);
    }
}