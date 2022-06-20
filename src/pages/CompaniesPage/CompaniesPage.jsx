import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function CompanysPage({questions}) {

    const [company, setCompany] = useState({
        company: ''
    })

    function handleChange(evt){
        setCompany({...company, [evt.target.name]: evt.target.value})
    }


    let questionsByCompany = questions.filter(x=>x.company === company.company)

    return (
        <div  class='container'>
            <h1>Companys Page you are on</h1>
            <form autoComplete='off'>
                <div className='form-group'>
                    <label>Company:</label>
                    <input type='text' name='company' value={company.company} onChange={handleChange}/>
                </div>
            </form>
            <div>
                {questionsByCompany.map((q, idx) => (
                    <Link to={'/question/'+q._id}>
                        <p>{q.question}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}