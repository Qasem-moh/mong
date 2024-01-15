const mongoose = require('mongoose');

const articalesSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    author:{
        required:true,
        type:String
    },
    typeB:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('article', articalesSchema)