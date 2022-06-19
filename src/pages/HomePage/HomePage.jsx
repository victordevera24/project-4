import React from 'react';
import QuestionIndex from '../../components/QuestionIndex/QuestionIndex'
import * as questionsAPI from '../../utilities/questions-api'
import { useEffect } from 'react';




export default function HomePage({questions, setQuestions}) {

    useEffect(function() {
      async function getQuestions() {
        const quests = await questionsAPI.getAll();
        setQuestions(quests)
      }
        getQuestions()
    }, []);

    return (
        <div  class='container'>
            <h1>Home Page you are on</h1>
            <QuestionIndex questions={questions}/>
        </div>
    )
}