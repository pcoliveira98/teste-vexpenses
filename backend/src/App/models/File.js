const { DataTypes } = require('sequelize');

const database = require('../../database/index');


const File = database.define('File', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    url: DataTypes.STRING
});

module.exports = File;