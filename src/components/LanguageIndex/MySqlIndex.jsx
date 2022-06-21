import LanguageBar from '../../components/LanguageBar/LanguageBar'

export default function MySqlIndex({questions}){
    let mySqlQuestions = questions.filter(x=>x.language==="mysql")
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>hello my sql </h1>
                {mySqlQuestions.map((q) => (
                    <p>{q.question}</p>
                ))}
            </div>

        </>
    )
}