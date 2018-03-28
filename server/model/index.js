const sequelize  = require('../conf/config.js');
// 定义model 连接到user表
const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  }, {
    freezeTableName: true, // 不自动为查找的数据库名称添加 's'
    timestamps: false
});
module.exports = User;
