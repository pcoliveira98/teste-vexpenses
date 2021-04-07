const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const Address = database.define('Address', {
    cep: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    district: DataTypes.STRING,
    complement: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
});

module.exports = Address;