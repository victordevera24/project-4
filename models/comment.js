const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    question: { type: Schema.Types.ObjectId, ref: 'Question'},
    comment: { type: String, required: true },
    likes: { type: Number, default: 0}
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema)
