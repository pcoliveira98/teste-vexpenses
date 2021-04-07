const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const Phone = require('./Phone');
const Address = require('./Address');
const File = require('./File');

const Contact = database.define('Contact', {
    name: DataTypes.STRING
});

// const associate = () => {
    Contact.hasMany(Phone, { foreignKey: 'contact_id', as: 'contact_phones' });
    Contact.hasMany(Address, { foreignKey: 'contact_id', as: 'contact_addresses' });
    Contact.belongsTo(File, { foreignKey: 'avatar_id', as: 'avatar', });
// }
// const associate = Contact.belongsTo(File, { foreignKey: 'avatar_id', as: 'avatar' });
module.exports = Contact;