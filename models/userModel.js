const mongoose = require('mongoose');

//schema design
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"],
    },
    contact:{
        type:String,
        required:[true, "contact no is required"],
    },
    exam:{
        type:String,
        required:[true, "exam mode is required"],
    },
},
{ timestamps: true}
);

//export
const userModel =mongoose.model('users', userSchema)
module.exports = userModel