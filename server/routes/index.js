let express = require('express');
let router = express.Router();
// 使用sequelize的model
const User = require('../model/index.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册接口
router.post('/register', urlencodedParser, (req, res) => {
  // 数据直接放在sql语法中
  let param = req;
  // 是否已经存在该用户

  checkExist(param)
    .then((result) => {
      if(result.length != 0) {
        res.end(JSON.stringify({code: -1, msg: '该用户名已被注册'}));
      } else {
        // 注册该用户
        addUser(param)
        .then( (data) => {
          console.log('写入成功');
          res.end(JSON.stringify({code:200, msg: '注册成功'}));
        })
        .catch((err) => {
          console.log(err);
          res.end(JSON.stringify({msg: err}));
        })
      }
    })
    .catch((err) => {
      res.end(JSON.stringify({msg: err}));
    })
})

// 登录接口
router.get('/login', (req, res) => {
  // 数据直接放在sql语法中
  let param = req;
  // 查询用户名以及密码
  let loginSql = `SELECT name, password FROM userlist WHERE name ='${param.query.name}' AND password ='${param.query.password}'`;
  checkExist({}, loginSql)
    .then((result) => {
      let respone = {code: 200, msg: ''};
      if(result.length == 0) {
        respone = {code: -1, msg: '用户名或密码错误'}
      } else {
        // 登录成功设置cookie
        res.cookie('name', param.query.name , { maxAge: new Date(Date.now() + 900000), httpOnly: false });
      }
      res.end(JSON.stringify(respone));
    })
    .catch((err) => {
      res.end(JSON.stringify({msg: err}));
    })
})

module.exports = router;
