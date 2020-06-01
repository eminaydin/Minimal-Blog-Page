import React, { useState, useEffect } from 'react';
import { Input, Button, Comment, Header, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Moment from 'react-moment';

const ProductDetails = (props) => {


    const [commentObject, setCommentObject] = useState({
        userName: "",
        text: "",
        date: "",
        id: ""
    });

    const clickHandler = () => {
        if (!commentObject.text.trim() || !commentObject.userName.trim()) {
            return
        }
        props.addNewComment(commentObject)
        setCommentObject({
            ...commentObject,
            userName: "",
            text: ""
        })

    }
    useEffect(() => {

    }, []);


    return (
        <div>
            {props.posts ? props.posts.text : null}
            <Header as='h3' dividing>
                Comments
                    </Header>
            {props.comments.filter(comment => {
                return comment.postId === props.match.params.slug
            }).map(({ text, id, date, userName }) => {
                const dateToFormat = new Date(date)


                return (
                    <Comment.Group minimal key={id}>

                        <Comment>
                            <Comment.Avatar as='a' src='/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>{userName}</Comment.Author>
                                <Comment.Metadata>
                                    <span><Moment date={dateToFormat} fromNow ago /></span>
                                </Comment.Metadata>
                                <Comment.Text>{text}</Comment.Text>
                                <Comment.Actions>
                                    <a onClick={() => props.deleteComment(id)}>Delete</a>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>


                )
            })}
            <Form reply>
                <Input placeholder="Your username" className="input" required value={commentObject.userName} onChange={username => setCommentObject({ ...commentObject, userName: username.target.value })} />

                <Form.TextArea value={commentObject.text} required
                    onChange={comment => setCommentObject({ ...commentObject, text: comment.target.value, date: new Date(), id: Date.now(), postId: props.match.params.slug })} />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={clickHandler} />
            </Form>


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
        addNewComment: (object) => { dispatch({ type: "ADD_COMMENT", payload: { comment: { userName: object.userName, text: object.text, date: object.date, id: object.id, postId: object.postId } } }) },
        deleteComment: (id) => { dispatch({ type: "DELETE_COMMENT", id: id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
