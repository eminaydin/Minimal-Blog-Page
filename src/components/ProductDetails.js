import React, { useState, useEffect } from 'react';
import { Input, Button, Comment, Header, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Moment from 'react-moment';

const ProductDetails = (props) => {

    const [commentObject, setCommentObject] = useState({
        userName: "",
        text: "",
        date: "",
        id: "",

    });
    const [correctPost, setCorrectPost] = useState({});


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
    function createMarkup() {
        return { __html: correctPost.htmlText };
    };

    useEffect(() => {
        setCorrectPost(props.posts.find(post => post.slug === props.match.params.slug));
    }, [props.match.params.slug, props.posts]);


    return (
        <div>
            {correctPost ? <div dangerouslySetInnerHTML={createMarkup()} /> : null}
            <Header as='h3' dividing> Comments</Header>
            <Form reply onSubmit={clickHandler}>
                <Input placeholder="Your username" className="input" required value={commentObject.userName} onChange={username => setCommentObject({ ...commentObject, userName: username.target.value })} />

                <Form.TextArea value={commentObject.text} required placeholder="Please type your comment here"
                    onChange={comment => setCommentObject({ ...commentObject, text: comment.target.value, date: new Date(), id: Date.now(), postSlug: props.match.params.slug })} />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>

            {correctPost.comments && correctPost.comments.length > 0 ?
                correctPost.comments.map(({ text, id, date, userName }) => {
                    const dateToFormat = new Date(date)

                    return (
                        <Comment.Group minimal key={id}>
                            <Comment>
                                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>{userName}</Comment.Author>
                                    <Comment.Metadata>
                                        <span><Moment date={dateToFormat} fromNow ago /></span>
                                    </Comment.Metadata>
                                    <Comment.Text>{text}</Comment.Text>
                                    <Comment.Actions>
                                        <a onClick={() => props.deleteComment(id, props.match.params.slug)}>Delete</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    )
                })
                :
                <Header as="h2" content="No comments yet" textAlign="center" />}



        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

const mapDispatchToProps = (dispatch) => {


    return {
        addNewComment: (object) => {
            dispatch({
                type: "ADD_COMMENT",
                payload: {
                    comment: {
                        userName: object.userName,
                        text: object.text,
                        date: object.date,
                        id: object.id,
                        postSlug: object.postSlug,
                    },
                    slug: object.postSlug
                }
            })
        },


        deleteComment: (id, slug, index) => {
            dispatch({
                type: "DELETE_COMMENT",
                payload: {
                    id,
                    slug,
                    index

                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
