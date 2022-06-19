const Comment = require('../../models/comment')

module.exports = {
    create,
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