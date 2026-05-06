const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Designation = require("./designation");
const Branch = require("./branch");
const bcrypt = require("bcryptjs");

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

User.beforeSave(async (user) => {
    if (user.changed("password")) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
})

User.prototype.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = User;