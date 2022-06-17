const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    user: { type: String, required: true},
    question: { type: String, required: true },
    language: { type: String, required: true },
    company: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema)
