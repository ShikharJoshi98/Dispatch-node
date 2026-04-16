const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Branch = sequelize.define("Branch", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

module.exports = Branch;