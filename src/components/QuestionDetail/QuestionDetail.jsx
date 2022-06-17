import {useParams} from 'react-router-dom';

export default function QuestionDetail({questions}){
    const {id} = useParams();
    console.log(id)
    let question = questions.find(x=>x._id === id);
    console.log(questions)
    console.log(question)
    return(
        <>
            <h3>question detail page</h3>
            <p>{question.question}</p>
        </>
    )
}