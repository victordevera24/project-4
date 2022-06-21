import {useState, useEffect} from 'react';
import * as userAPI from '../../utilities/users-api'

export default function CommentCard({comment}){

    const [user, setUser] = useState([])
    
    useEffect(function(){
        async function getUser(){
            const user = await userAPI.getUser(comment.user)
            console.log('in use effect get user', user)
            setUser(user)
        }
        getUser()
    }, [])

    return(
        <>
            <div>
                <p>{comment.comment}</p>
                <p>-{user.name} {comment.createdAt}</p>
            </div>
            <hr/>
        </>
    )

}