// sequelize配置
let sqlconf = require('../sqlconfig.js');
const Sequelize = require('sequelize');
let sequelize = new Sequelize('webChat', 'root', '123456', {
  host: sqlconf.host,
  dialect: 'mysql', // 数据库类型 mysql

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize;
