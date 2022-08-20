//user controller

const User=require('../model/User')

//注册
async function register(userInfo={}) {
    //插入数据库
    const newUser=await User.create(userInfo)
    //返回注册的用户信息
    return newUser
}

//登录
async function login(username,password) {
    //查找是否存在
    const user=await User.findOne({username,password})
    console.log(user);
    if(user!=null){
        //登录成功
        return true
    }
    //登录失败
    return false
}

module.exports={
    register,
    login
}