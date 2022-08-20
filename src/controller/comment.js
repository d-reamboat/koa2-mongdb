//comment controller

const Comment = require('../model/Comment')

//更新留言
async function update(_id, username, content) {
    const newDate = await Comment.findOneAndUpdate(
        { _id, username },  //查询条件
        { content },        //更新内容
        { new: true }       //返回更新之后的最新内容，默认返回更新之前的
    )
    return newDate
}

//删除留言
async function del(_id, username) {
    await Comment.remove({
        _id,
        username
    })
}

//获取留言列表
async function getList(username = '') {
    const whereOpt = {}
    if (username) {
        whereOpt.username = username
    }
    //查找
    const list = await Comment.find(whereOpt).sort({ _id: 1 })

    return list
}

//创建留言
async function create(username, content) {
    //插入数据库
    const newComment = await Comment.create({
        username,
        content
    })

    return newComment
}

module.exports = {
    create,
    getList,
    del,
    update
}