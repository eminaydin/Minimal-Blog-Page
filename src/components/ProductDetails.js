import React, { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

const ProductDetails = (props) => {


    const [commentObject, setCommentObject] = useState({
        text: "",
        date: "",
        id: ""
    });

    const clickHandler = () => {
        if (!commentObject.text.trim()) {
            return
        }
        props.addNewComment(commentObject)
        setCommentObject({
            ...commentObject,
            text: ""
        })
        console.log(commentObject.id);
    }
    useEffect(() => {

    }, []);

    return (
        <div>
            {props.posts ? props.posts.text : null}

            {props.comments.filter(comment => {
                return comment.postId === props.match.params.slug
            }).map(({ text, id }) => {

                return (<div key={id}>
                    <p>{text}</p>
                    <Button onClick={() => props.deleteComment(id)} >Delete comment</Button></div>)
            })}
            <Input value={commentObject.text}
                onChange={comment => setCommentObject({ text: comment.target.value, date: new Date(), id: Date.now(), postId: props.match.params.slug })}
            />
            <Button onClick={clickHandler} >Add comment</Button>

        </div>
    );
}
const mapStateToProps = (state, ownProps) => {

    let slug = ownProps.match.params.slug;


    return {
        ...state,
        posts: state.posts.find(post => post.slug === slug),

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: (object) => { dispatch({ type: "ADD_COMMENT", payload: { comment: { text: object.text, date: object.date, id: object.id, postId: object.postId } } }) },
        deleteComment: (id) => { dispatch({ type: "DELETE_COMMENT", id: id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
