import LanguageBar from '../../components/LanguageBar/LanguageBar'



export default function javaScriptIndex({questions}){
    let javaScriptQuestions = questions.filter(x=>x.language==='javascript')
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>hello js</h1>
                {javaScriptQuestions.map((q)=>(
                    <p>{q.question}</p>
                ))}
            </div>
        </>
    )
}