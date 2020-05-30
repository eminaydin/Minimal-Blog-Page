import React, { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

const ProductDetails = (props) => {
    const [commentObject, setCommentObject] = useState({});

    const clickHandler = () => {
        props.addNewComment(commentObject)

    }

    return (
        <div>
            {props.posts ? props.posts.text : null}

            {props.comments.map(({ text }) => {
                return <p>{text}</p>
            })}
            <Input value={commentObject.text}
                onChange={comment => setCommentObject({ text: comment.target.value, date: new Date, id: Date.now() })} />
            <Button onClick={clickHandler} />
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
        addNewComment: (object) => { dispatch({ type: "ADD_COMMENT", payload: { comment: { text: object.text, date: object.date, id: object.id } } }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
