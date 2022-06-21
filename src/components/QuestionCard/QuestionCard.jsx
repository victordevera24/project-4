import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './QuestionCard.css'
import * as userAPI from '../../utilities/users-api'


export default function QuestionCard({question, index}){

    const [user, setUser] = useState([])
    
    useEffect(function(){
        async function getUser(){
            const user = await userAPI.getUser(question.user)
            console.log('in use effect get user', user)
            setUser(user)
        }
        getUser()
    }, [question.user])

    return(
        <>
            <div>
                <Link to={'/question/'+question._id}>
                    <p>{question.question}</p>
                </Link> 
                <p>-{user.name} {question.createdAt}</p>
            </div>
            <hr/>
        </>
    )
}