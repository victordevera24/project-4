const Question = require('../../models/question')


module.exports = {
    create,
}

async function create(req, res){
    try{
        req.body.user = req.user._id
        await Question.findOne({_id:req.body.question}, 
            async function(error, found){
                found.comments.push(req.body)
                await found.save()
                res.json(found)

            })
    } catch (err) {
        res.status(400).json(err)
    }
}
