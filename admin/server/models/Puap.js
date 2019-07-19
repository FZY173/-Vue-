const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    category:{type:String},
    name:{type:String},
    phone:{type:String},
    id:{type:String},
    date:{type:String},
    time1:{type:String},
    time2:{type:String},

})

module.exports = mongoose.model('Puap',schema)