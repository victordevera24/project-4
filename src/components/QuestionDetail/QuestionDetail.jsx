import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {addComment} from '../../utilities/comments-api'
import * as commentsAPI from '../../utilities/comments-api'

export default function QuestionDetail({questions, setQuestions}){

    const {id} = useParams();
    let question = questions.find(x=>x._id === id);
    const [comment, setComment] = useState({
        user: '',
        question: id,
        comment: '',
        likes: 0
    }) 

    const [comments, setComments] = useState([])

    
    useEffect(function(){ 
        async function getComments() {
            const comments = await commentsAPI.getAll()
            setComments(comments)
        }
        getComments()
    }, [])

    function handleChange(evt){
        setComment({...comment, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        addComment(comment);
    }

    let questionComments = comments.filter(x=>x.question===id)
    // console.log('here are all the quesiontsssfsdafdsf:. ', questions)
    // console.log('here is question: ', question)
    
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
            <div>
                {questionComments.map((c, idx)=> (
                    <p>{c.comment}</p>
                ))}
            </div>
        </div>
    )
}