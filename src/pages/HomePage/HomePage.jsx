import React from 'react';
import QuestionIndex from '../../components/QuestionIndex/QuestionIndex'
import * as questionsAPI from '../../utilities/questions-api'
import { useEffect } from 'react';
import './HomePage.css';



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
            <h3>Recent Questions</h3>
            <QuestionIndex questions={questions}/>
        </div>
    )
}