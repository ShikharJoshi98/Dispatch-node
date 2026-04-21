const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');
const { sequelize } = require("../config/db");
const Roles = require("./roles.model");
const Branch = require("./branch.model");
const Designation = require("./designation.model");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
        references: {
            model: Roles,
            key: "id"
        }
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Branch,
            key: "id"
        }
    },
    designation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Designation,
            key: "id"
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    updated_by: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: true,

     defaultScope: {
        attributes: {
            exclude: ["password"]
        }
    },
    scopes: {
        withPassword: {
            attributes: {}
        }
    },

    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const saltRounds = 10;
                user.password = await bcrypt.hash(user.password, saltRounds);
            }
        },
        beforeUpdate: async (user) => {
            if (user.changed("password")) {
                const saltRounds = 10;
                user.password = await bcrypt.hash(user.password, saltRounds);
            }
        }
    }
});

User.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    delete values.reset_password_token;
    delete values.reset_password_expires;
    delete values.verify_account_token;
    delete values.verify_account_expires;
    return values;
};

module.exports = User;