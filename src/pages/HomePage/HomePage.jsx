import React from 'react';
import { useState, useEffect } from 'react';
import * as questionsAPI from '../../utilities/questions-api'
import QuestionIndex from '../../components/QuestionIndex/QuestionIndex'


export default function HomePage() {
    
    
    const [questions, setQuestions]= useState({})
    
    console.log('top of homepage', questions)
    useEffect(function() {
        async function getQuestions() {
            const quests = await questionsAPI.getAll();
            setQuestions(quests)
        }
        getQuestions()
    }, []);
    
    console.log('we are here', questions)

    return (
        <div  class='container'>
            <h1>Home Page you are on</h1>
            <QuestionIndex questions={questions}/>
        </div>
    )
}