const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema({
    name : String,
    code : String,
    author : {type: Schema.Types.ObjectId, ref : 'User'},
    maxTime : Number,
    maxMarks : Number,
    passingMarks : Number,
    passingComments : String,
    endDate : Date,
    failingComments : String,
    public : Boolean,
    qna : [{
        question : String,
        options : [],
        correct : [],
        marks : Number
    }]
});

module.exports = mongoose.model('Test', TestSchema);