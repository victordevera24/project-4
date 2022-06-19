const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: String, required: true },
    question: { type: String, required: true},
    comment: { type: String, required: true },
    likes: { type: Number, default: 0}
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema)
