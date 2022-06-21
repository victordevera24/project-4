const Question = require('../../models/question');

module.exports = {
    create,
    index,
    findQuestion
}

async function create(req, res){
    try {
        req.body.user = req.user._id
        req.body.company = req.body.company.toLowerCase()
        const quest = Question.create(req.body);
        res.json(quest)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req,res) {
    const quests = await Question.find({}).sort('createAt');
    res.json(quests)
}

async function findQuestion(req,res){
    console.log('in find question', req.params.id)
    await Question.findOne({_id:req.params.id})
        .populate('comments').exec(function(error, question){
            console.log('in controller. this is question', question)
            res.json(question)
        })
}