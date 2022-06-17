import { Link } from 'react-router-dom';

export default function QuestionCard({question, index}){
    return(
        <>
            <Link to={'/question/'+question._id}>
                <div>
                    <p>{question.question}</p>
                </div>
            </Link> 
        </>
    )
}