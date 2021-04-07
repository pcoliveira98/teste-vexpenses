const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const Contact = require('./Contact');

const Phone = database.define('Phone', {
    number: DataTypes.STRING
});

Phone.associate = (models) => {
    Phone.belongsTo(models.Contact, { foreignKey: 'contact_id', as: 'contact' });
}

module.exports = Phone;