import React, { useState, useEffect } from "react";
import { Input, Button, Comment, Header, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

const Post = (props) => {
  const posts = useSelector((state) => state.posts);
  const [commentObject, setCommentObject] = useState({
    userName: "",
    text: "",
    date: "",
    id: "",
  });
  const [correctPost, setCorrectPost] = useState({});
  const dispatch = useDispatch();
  const paramsSlug = props.match.params.slug;
  const clickHandler = () => {
    if (!commentObject.text.trim() || !commentObject.userName.trim()) {
      return;
    }
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        comment: commentObject,
      },
    });
    setCommentObject({
      ...commentObject,
      userName: "",
      text: "",
    });
  };
  function createMarkup() {
    return { __html: correctPost.htmlText };
  }

  useEffect(() => {
    setCorrectPost(posts.find((post) => post.slug === paramsSlug));
  }, [paramsSlug, posts]);

  function form() {
    return (
      <Form reply onSubmit={clickHandler}>
        <Input
          placeholder="Your username"
          className="input"
          required
          value={commentObject.userName}
          onChange={(username) =>
            setCommentObject({
              ...commentObject,
              userName: username.target.value,
            })
          }
        />

        <Form.TextArea
          value={commentObject.text}
          required
          placeholder="Please type your comment here"
          onChange={(comment) =>
            setCommentObject({
              ...commentObject,
              text: comment.target.value,
              date: new Date(),
              id: Date.now(),
              postSlug: paramsSlug,
            })
          }
        />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    );
  }
  function commentSection() {
    return correctPost.comments && correctPost.comments.length > 0 ? (
      correctPost.comments.map(({ text, id, date, userName }) => {
        const dateToFormat = new Date(date);

        return (
          <Comment.Group minimal key={id}>
            <Comment>
              <Comment.Avatar
                as="a"
                src="https://react.semantic-ui.com/images/avatar/small/ade.jpg"
              />
              <Comment.Content>
                <Comment.Author as="a">{userName}</Comment.Author>
                <Comment.Metadata>
                  <span>
                    <Moment date={dateToFormat} fromNow ago />
                  </span>
                </Comment.Metadata>
                <Comment.Text>{text}</Comment.Text>
                <Comment.Actions>
                  <span
                    onClick={() =>
                      dispatch({
                        type: "DELETE_COMMENT",
                        payload: { id: id, slug: paramsSlug },
                      })
                    }
                    className="delete"
                  >
                    Delete
                  </span>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );
      })
    ) : (
      <Header as="h2" content="No comments yet" textAlign="center" />
    );
  }
  function commentHeader() {
    return (
      <Header as="h3" dividing>
        Comments
      </Header>
    );
  }
  return (
    <div>
      {correctPost ? <div dangerouslySetInnerHTML={createMarkup()} /> : null}
      {commentHeader()}
      {form()}
      {commentSection()}
    </div>
  );
};

export default Post;
