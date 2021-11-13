const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const UserShema = new Shema({
    name:{type : String},
    username:{type:String},
    password:{type:String}
})