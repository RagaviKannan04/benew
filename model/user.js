const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    lname:{
        type: String,
        required: true,
    },
    fname:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required : true,
        unique : true,
    }

})


module.exports = mongoose.model('Data', userSchema)


//datas