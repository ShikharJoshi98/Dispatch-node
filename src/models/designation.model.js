const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Designation = sequelize.define("Designation", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    timestamps: true
});

module.exports = Designation;