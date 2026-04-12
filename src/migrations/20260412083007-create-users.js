'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     **/
     
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      role: {
        type: Sequelize.ENUM('employee', 'admin', 'superadmin'),
        defaultValue: 'employee',
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM('pending', 'active'),
        defaultValue: 'pending'
      },

      otp: {
        type: Sequelize.STRING,
        allowNull: true
      },

      otpExpires: {
        type: Sequelize.DATE,
        allowNull: true
      },

      resetPasswordToken: {
        type: Sequelize.STRING,
        allowNull: true
      },

      resetPasswordExpires: {
        type: Sequelize.DATE,
        allowNull: true
      },

      tokenVersion: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
        }
      });     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
