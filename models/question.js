const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    user: { type: String, required: true },
    question: { type: String, required: true},
    comment: { type: String, required: true },
    likes: { type: Number, default: 0}
}, {
    timestamps: true
});


const questionSchema = new Schema({
    user: { type: String, required: true},
    question: { type: String, required: true },
    language: { type: String, required: true },
    company: { type: String, required: true },
    comments: [ commentSchema ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema)

