const { DataTypes } = require('sequelize');

const database = require('../../database/index');
const Contact = require('./Contact');
const File = require('./File');

const User = database.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
});

User.hasMany(Contact, {foreignKey: 'user_id', as: 'user'});
User.belongsTo(File, { foreignKey: 'avatar_id', as: 'avatar' });

module.exports = User;