import React from 'react';
// import {useState} from 'react';

export default function SoftSkillsPage({questions}) {
    let softSkillQuestions = questions.filter(x=>x.language=== "softSkill")
    return (
        <div  class='container'>
            <h1>Soft skills Page you are on</h1>
            {softSkillQuestions.map((q, idx) => (
                <p>{q.question}</p>
            ))}
        </div>
    )
}