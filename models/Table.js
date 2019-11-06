const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    no : {
        type:String,
        required:true
    },
    booking : {
        type:Boolean
    },
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        username: String
     },
     expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '30m' },
      },
     date:{
        type:Date,
        default:Date.now
    }
});

const Table = mongoose.model("Table" , TableSchema);

module.exports = Table;