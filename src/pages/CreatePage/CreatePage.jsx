import React from 'react';
import {useState} from 'react';
import { addQuestion } from '../../utilities/questions-api'
import {useHistory} from 'react-router-dom';


export default function CreatePage() {

    const [question, setQuestion] = useState({
        question: '',
        language: 'javascript',
        company: '',
    })
    function handleChange(evt){
        setQuestion({...question, [evt.target.name]: evt.target.value });
    }

    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        addQuestion(question)
        history.push('/home');
    }
    return (
        <div className='container'>
            <h3>Create Question</h3>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='form-group'>
                    <label>Question:</label>
                    <textarea className='form-control' type="text" name='question' value={question.question} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Language:</label>
                    <select name='language' value={question.language} onChange={handleChange}>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="mysql">MySQL</option>
                        <option value="mongo">MongoDB</option>
                        <option value='softSkill'>Behavioral</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Company:</label>
                    <input type='text' name='company' value={question.company} onChange={handleChange}/>
                </div>
                <button className='btn btn-lg btn-info'type='submit'>Add Question</button>
            </form>
        </div>
    )
}