//留言模型

const mongoose = require('../db/db')

//模型配置
const CommentSchema = mongoose.Schema({
    username:String,
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true   //记录时间
})

//创建模型
//此时数据库中只有一个users目录
const Comment = mongoose.model('comment', CommentSchema)
//运行18行之后会在数据库中自动创建comments目录

module.exports = Comment
