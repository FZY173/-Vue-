const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    id:{type:String},
    email:{type:String},
    desc:{type:String},
})

module.exports = mongoose.model('Grzx',schema)