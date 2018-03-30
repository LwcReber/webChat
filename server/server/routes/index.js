let express = require('express');
let router = express.Router();
let sequelize = require('../conf/config.js');
const User = require('../model/index.js');
// 创建application/x-www-form-urlencoded 编码解析

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// 添加用户
function addUser(res, param) {
    return sequelize.transaction( (t) => {
      // 在这里链接您的所有查询。 确保你返回他们。
      return User.create(param, {
        transaction: t
      }).then(function(result) {
        console.log(result);
        res.end(JSON.stringify({code: 1, msg: '注册成功'}));
      }).catch(function(err) {
        console.log(err);
        res.end(JSON.stringify({code: -1, msg: err}));
      })
    });
}
// 注册接口
router.post('/register', (req, res) => {
  // post请求参数对象 ：req.body;
  var saveUser = {
    name: req.body.name,
    password: req.body.password,
  };
  // 查询是否已经存在该用户名
  User.findAll({
      where:{
        name: req.body.name
      }
  }).then((result) => {
      // 用户名已经存在
      if(result.length > 0) {
        res.end(JSON.stringify({code: -1, msg: '该用户名已被注册'}));
      } else {
      // 添加用户
        addUser(res ,saveUser);
      }
  }).catch((err) => {
      console.log(err);
      res.end(JSON.stringify({code: -1, msg: err}));
  });
})

// 登录接口
router.get('/login', (req, res) => {
  // 查询用户名以及密码
  // get请求参数：req.query
  User.findAll({
      where: {
        name: req.query.name,
        password: req.query.password,
      }
  }).then((result) =>{
      // 用户名已经存在
      if(result.length > 0) {
        res.end(JSON.stringify({code: 1, msg: '登录'}));
        res.cookie('name', param.query.name , { maxAge: new Date(Date.now() + 900000), httpOnly: false });
      } else {
        res.end(JSON.stringify({code: -1, msg: '用户名或密码错误'}));
      }
  }).catch((err) => {
      res.end(JSON.stringify({code: -1, msg: err}));
  });
})

module.exports = router;
