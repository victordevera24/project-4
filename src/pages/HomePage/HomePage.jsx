import React from 'react';
import QuestionIndex from '../../components/QuestionIndex/QuestionIndex'


export default function HomePage({questions}) {


    console.log('in app', questions)
    return (
        <div  class='container'>
            <h1>Home Page you are on</h1>
            <QuestionIndex questions={questions}/>
        </div>
    )
}