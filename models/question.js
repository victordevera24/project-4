const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    question: { type: String, required: true },
    language: { type: String, required: true },
    company: { type: String, required: true },
    coding: { type: Boolean, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema)
