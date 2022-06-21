import LanguageBar from '../../components/LanguageBar/LanguageBar'

export default function pythonIndex({questions}){
    let pythonQuestions = questions.filter(x=>x.language==='python')
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>hello python</h1>
                {pythonQuestions.map((q)=> (
                    <p>{q.question}</p>
                ))}
            </div>
        </>
    )
}