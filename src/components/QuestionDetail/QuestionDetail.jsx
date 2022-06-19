import {useParams, useHistory} from 'react-router-dom';
import {useState} from 'react';
import {addComment} from '../../utilities/comments-api'

export default function QuestionDetail({questions}){
    const history = useHistory();
    const {id} = useParams();
    let question = questions.find(x=>x._id === id);
    let question_id = id.id
    console.log(id)
    const [comment, setComment] = useState({
        user: '',
        question: id,
        comment: '',
        likes: 0
    }) 

    function handleChange(evt){
        setComment({...comment, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        addComment(comment)
    }

    return(
        <div className='container'>
            <div>
                <h3>question detail page</h3>
                <p>{question.question}</p>
            </div>
            <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='form-group'>
                    <label>Comment:</label>
                    <textarea className='form-control' type="text" name='comment' value={comment.comment} onChange={handleChange} />
                </div>
                <button className='btn btn-lg btn-info'type='submit'>Add Comment</button>
            </form>
            </div>
        </div>
    )
}