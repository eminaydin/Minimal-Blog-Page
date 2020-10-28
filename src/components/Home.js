import React from "react";
import { Item, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.posts);
  function checkComments(comments) {
    if (comments.length < 1) return "No comments yet";
    if (comments.length === 1) return comments.length + " comment";
    if (comments.length > 1) return comments.length + " comments";
  }
  function renderItems() {
    return (
      <Item.Group divided>
        {posts.map(({ slug, title, id, text, comments }, index) => {
          const name =
            index === 0
              ? "ade"
              : index === 1
              ? "chris"
              : index === 2
              ? "jenny"
              : index === 3
              ? "justen"
              : index === 4
              ? "nan"
              : index === 5
              ? "stevie"
              : null;
          return (
            <Item as={Link} to={`${slug}`} key={id}>
              <Item.Image
                size="small"
                src={`https://react.semantic-ui.com/images/avatar/large/${name}.jpg`}
              />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Description>{text}</Item.Description>
                <Item.Extra>
                  <Icon color="grey" name="comment" /> {checkComments(comments)}
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    );
  }
  return renderItems();
};
export default Home;
