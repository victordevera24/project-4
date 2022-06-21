import LanguageBar from '../../components/LanguageBar/LanguageBar'
import { Link } from 'react-router-dom';



export default function javaScriptIndex({questions}){
    let javaScriptQuestions = questions.filter(x=>x.language==='javascript')
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>JavaScript Questions</h1>
                {javaScriptQuestions.map((q)=>(
                    <Link to={'/question/'+q._id}>
                        <p>{q.question}</p>
                        <hr/>
                    </Link>
                ))}
                
            </div>
        </>
    )
}