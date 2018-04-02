const sequelize  = require('../conf/config.js');
let Sequelize = require('sequelize');
// 定义model 连接到user表
// 数据设计表需要手动添加createdAt、updatedAt栏目，来保存时间戳
const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
  }, {
    freezeTableName: true, // 不自动为查找的数据库名称添加 's'
});
module.exports = User;
