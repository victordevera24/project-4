const Question = require('../../models/question');

module.exports = {
    create,
}

async function create(req, res){
    try {
        req.body.user = req.user._id
        const quest = Question.create(req.body);
        res.json(quest)
    } catch (err) {
        res.status(400).json(err)
    }
}