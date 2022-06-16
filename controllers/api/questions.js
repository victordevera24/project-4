const Question = require('../../models/question');

module.exports = {
    create,
}

async function create(req, res){
    try {
        Question.create(req.body);
    } catch (err) {
        res.status(400).json(err)
    }
}