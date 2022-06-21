import LanguageBar from '../../components/LanguageBar/LanguageBar'
import { Link } from 'react-router-dom';


export default function pythonIndex({questions}){
    let pythonQuestions = questions.filter(x=>x.language==='python')
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>Python Questions</h1>
                {pythonQuestions.map((q)=> (
                    <Link to={'/question/'+q._id}>
                        <p>{q.question}</p>
                        <hr/>
                    </Link>
                ))}
                
            </div>
        </>
    )
}