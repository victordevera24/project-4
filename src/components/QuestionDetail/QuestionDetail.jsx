import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {addComment} from '../../utilities/comments-api'
import Comments from '../Comments/Comments'
import * as questionsAPI from '../../utilities/questions-api'


export default function QuestionDetail(){
    const {id} = useParams();
    console.log('before use effect')
    const [quest, setQuest] = useState({
        comments: [],
        user: '',
        question: '',
        language: '',
        company: '',
    })

    useEffect(function() {
        async function getQuestion() {
            const question = await questionsAPI.getQuestion(id);
            console.log('in use effect', question);
            setQuest(question)
        }
            getQuestion()
      }, [id]);
    

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
        const question = await addComment(comment);
        console.log('after handle submit', question)
        setQuest(question)
        setComment({comment: ''})
    }

    return(
        <div className='container'>
            <div>
                <h3>question detail page</h3>
                <p>{quest.question}</p>
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
                <Comments comments={quest.comments} id={id}/>
            </div>
        </div>
    )
}