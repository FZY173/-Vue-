const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        //密码默认查不出来，以此不对同一个密码进行反复的散列
       select:false,
        //hashSync进行散列，传回值，第二个参数表示加密指数，越高越安全，但越耗时
        //bcrypt散列是不可逆的，同一个值每次散列每次值都不一样
        set(val){
           return require('bcrypt').hashSync(val,10)
      }
    },
})

module.exports = mongoose.model('Adminuser',schema)