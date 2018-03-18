const Sequelize = require('sequelize');
const sequelize = new Sequelize('user', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql', // 数据库类型 mysql

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const User = sequelize.define('userlist', {// 定义表
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  // // force: true 如果表已经存在，将会丢弃表
  // User.sync({force: true}).then(() => {
  //   // 表已创建
  //   return User.create({
  //     firstName: 'John',
  //     lastName: 'Hancock'
  //   });
  // });

// User.findAll().then(users => {
//   console.log(users)
// })

User.findOne().then(user => {
  console.log('getfName' + user.get('name'));
});
