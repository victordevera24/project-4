
import CommentCard from './CommentCard'


export default function Comments({comments}){

    return(
        <div>
            {comments.map((c, idx)=> (
                <CommentCard comment={c}/>
            ))}
        </div>
    )

}