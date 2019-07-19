//建立模型，同时赋值
//这是新建电瓶车预约的模型
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    id:{type:String},
    date:{type:String},
    time1:{type:String},
    time2:{type:String},
    desc:{type:String},
    icon:{type:String},
    //不可能把图片的数据信息上传，我们把图片地址传到一个地址，把图片地址存入字符串，然后前端会HTML会展示图片地址
    icon2:{type:String},
})

module.exports = mongoose.model('Xjyy',schema)