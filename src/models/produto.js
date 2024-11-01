const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('../models/categoria');

const Produto = sequelize.define('Produto' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Categoria,
          key: 'categoria_id',
        }
    },
    
});

Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });
module.exports = Produto;