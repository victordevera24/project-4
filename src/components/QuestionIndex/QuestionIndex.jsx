import QuestionCard from '../QuestionCard/QuestionCard'

export default function QuestionIndex({questions}) {
    return (
        <>
            {questions.map((q, idx) => (
                <QuestionCard question={q} index={idx}/>
            ))}
        </>
    )
}