const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Designation = require("./designation");
const Branch = require("./branch");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('superadmin', 'admin', 'employee'),
        defaultValue: 'employee',
        allowNull: false
    },
    designation_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Designation,
            key: 'id'
        }
    },
    branch_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Branch,
            key: 'id'
        }
    },
    salary: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    }
});

module.exports = User;