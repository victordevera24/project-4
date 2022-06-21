import LanguageBar from '../../components/LanguageBar/LanguageBar'
import { Link } from 'react-router-dom';



export default function mongoDbIndex({questions}){
    let mongoDbQuestions = questions.filter(x=>x.language==='mongo')
    console.log('in mongo page', mongoDbQuestions)
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>MongoDB Questions</h1>
                {mongoDbQuestions.map((q)=> (
                    <Link to={'/question/'+q._id}>
                        <p>{q.question}</p>
                        <hr/>
                    </Link>
                ))}
               
            </div>
        </>
    )
}