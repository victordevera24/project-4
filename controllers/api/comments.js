const Comment = require('../../models/comment')

module.exports = {
    create,
    index
}

async function create(req, res){
    try{
        req.body.user = req.user._id
        console.log('here is bodyyyyytytytytytytytytytyt', req.body)
        const comment = Comment.create(req.body);
        res.json(comment)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req,res){
    const comments = await Comment.find({}).sort('createAt')
    res.json(comments)
}