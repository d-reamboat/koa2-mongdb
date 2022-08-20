const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment3'

//开始连接数据库
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//获取连接对象（数据库）
const conn = mongoose.connection

mongoose.connection.once("open", () => {
    console.log("数据库连接成功！");
  });

mongoose.connection.once("close", () => {
    console.log("数据库已断开");
})

conn.on('error', err => {
    console.error('mongodb 连接出错', err)
})

module.exports = mongoose