import React from 'react';
import { Link } from 'react-router-dom';


export default function SoftSkillsPage({questions}) {
    let softSkillQuestions = questions.filter(x=>x.language=== "softSkill")
    return (
        <div  class='container'>
            <h3>Soft Skill Questions</h3>
            {softSkillQuestions.map((q, idx) => (
                <Link to={'/question/'+q._id}>
                    <p>{q.question}</p>
                    <hr/>
                </Link>
            ))}
            
        </div>
    )
}