import LanguageBar from '../../components/LanguageBar/LanguageBar'



export default function mongoDbIndex({questions}){
    let mongoDbQuestions = questions.filter(x=>x.language==='mongo')
    console.log('in mongo page', mongoDbQuestions)
    return(
        <>
            <div class='container'>
                <LanguageBar/>
                <h1>hello mongo db</h1>
                {mongoDbQuestions.map((q)=> (
                    <p>{q.question}</p>
                ))}
            </div>
        </>
    )
}