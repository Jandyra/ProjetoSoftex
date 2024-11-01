const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  cliente_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cliente_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cliente_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cliente;