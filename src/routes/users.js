const { register,login } = require('../controller/user')
const loginCheck = require('../middleware/loginCheck')

const router = require('koa-router')()

router.prefix('/users')

// 获取用户信息
router.get('/getUserInfo', loginCheck, async (ctx, next) => {
  ctx.body = {
    errno: 0,
    data: ctx.session.userInfo
  }
})

//注册
router.post('/register', async (ctx, next) => {
  //获取注册信息（前端post过来的）
  const userInfo = ctx.request.body
  //提交注册
  try {
    const newUser = await register(userInfo)
    ctx.body = {
      errno: 0,
      data: newUser
    }
  } catch (ex) {
    close.errno('注册失败', ex)
    ctx.body = {
      errno: -1,
      message: '注册失败'
    }
  }

})

//登录
router.post('/login', async (ctx, next) => {
  //获取登录信息（前端post过来的）
  const { username, password } = ctx.request.body
  //验证登录
  console.log(username);
  const res=await login(username, password)
  if(res){
    //登录成功
    //设置session
    ctx.session.userInfo={
      username
    }
    ctx.body={
      errno:0
    }
  }else{
    ctx.body={
      errno:-1,
      message:'登录失败'
    }
  }
})

module.exports = router
