import { useContext, useEffect, useState } from "react";

import { useService } from "../../../../hooks/useService";
import { useForm } from "../../../../hooks/useForm";
import { commentsServiceFactory } from "../../../../services/commentsService";

import { CommentItem } from "./CommentItem";
import { AuthContext } from "../../../../contexts/AuthContext";

export function Comments({ recipeId, isAuthenticated }) {
    const [comments, setComments] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const commentsService = useService(commentsServiceFactory);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        commentsService.getCommentsForRecipe(recipeId)
            .then(res => setComments(res))
            .catch(err => console.log(err.message))
    }, [recipeId])

    const { values, changeValues, onSubmitClick } = useForm({
        recipeId,
        comment: ""
    }, onCommentSubmit)

    async function onCommentSubmit(comment) {
        const { recipeId, ...commentData } = comment;
        try {
            let result = await commentsService.create(recipeId, commentData);
            result.auth = auth;
            setComments(state => [...state, result])
        } catch (err) {
            console.log(err.message);
        }
    }

    function validateComment(data) {
        if (data.length < 2) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }

    return (

        <div id="comments">
            <h3>Comments</h3>
            {comments.length > 0
                ? (
                    comments.map(c => <CommentItem key={c._id} {...c} />)
                )
                : (
                    <div className="comment">
                        <p>No comments yet</p>
                    </div>
                )}


            {isAuthenticated && <form method="POST" id="newCommentForm" onSubmit={onSubmitClick}>
                <textarea
                    placeholder="Add new comment..."
                    name="comment"
                    value={values.comment}
                    onChange={(e) => {
                        changeValues(e)
                        validateComment(values.comment)
                    }}
                ></textarea>
                <button disabled={!isValid} ><i className="bi bi-send-fill"></i></button>
            </form>}
            {isAuthenticated && !isValid && (
                <p style={{marginLeft: "32px"}}>*Comment must contain at least 1 symbol.</p>
            )}
        </div>
    )
}