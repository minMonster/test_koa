const router = require('koa-router')()

router.prefix('/users')
//引入数据库操作方法
const UserController = require('../controller/user.js');
router.post('/', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
//checkToken作为中间件存在
const checkToken = require('../token/checkToken.js');

router.post('/login', UserController.Login);
//注册
router.post('/register', UserController.Reg);

//获取所有用户
router.get('/user', checkToken, UserController.GetAllUsers);
//删除某个用户
router.post('/delUser', checkToken, UserController.DelUser);

module.exports = router
