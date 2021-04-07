const { DataTypes } = require('sequelize');

const database = require('../../database/index');


const File = database.define('File', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    url: {
        type: DataTypes.VIRTUAL,
        get () {
            return `${process.env.APP_URL}:${process.env.APP_PORT}/files/${this.path}`
        }
    }
});

module.exports = File;