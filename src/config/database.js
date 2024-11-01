const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sge_js', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;