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


const User = sequelize.define('userlist', { // 定义表
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
  surePsw: {
    type: Sequelize.STRING
  }
  }, {
    freezeTableName: true, // 不自动为查找的数据库名称添加 's'
    timestamps: false
});

let now = new Date();
// 增操作
// User.create({
//     name: 'Gaffey',
//     password: 123456,
//     surePsw: 123456,
//     createdAt: now,
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// });

// await 写法
// (async () => {
//   let newData = await User.create({
//     name: 'Gaffey',
//     password: 123456,
//     surePsw: 123456,
//     createdAt: now,
//   });
//   console.log('created', JSON.stringify(newData));
// })();

//查操作
// ( async ()=> {
//
//   let getData = await User.findAll({
//     where: {
//       name: 'Gaffey'
//     }
//   });
//   console.log(`find ${getData.length} `);
//   for (let p of getData) {
//     console.log(JSON.stringify(p));
//   }
// }
// )();

// 改操作
let param = {'name':'ccd'};
User.update(param,
    {
        'where':{'id': 41}
    }
);

// 删操作
User.destroy({'where':{'id': 37}});//将表内userId等于23的元组删除
// // force: true 如果表已经存在，将会丢弃表
// User.sync({force: true}).then(() => {
//   // 表已创建
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });
// User.findAll().then(data => {
//   console.log(data.get('name'));
// })

// User.findOne().then(user => {
//   console.log('getfName' + user.get('name'));
// });
