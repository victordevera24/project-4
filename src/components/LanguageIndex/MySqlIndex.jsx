import LanguageBar from '../../components/LanguageBar/LanguageBar'
import { Link } from 'react-router-dom';


export default function MySqlIndex({questions}){
    let mySqlQuestions = questions.filter(x=>x.language==="mysql")
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>MySQL Questions</h1>
                {mySqlQuestions.map((q) => (
                    <Link to={'/question/'+q._id}>

                    <p>{q.question}</p>
                    </Link>

                ))}
            </div>

        </>
    )
}