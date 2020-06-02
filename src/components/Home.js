import React from 'react';
import { Item, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { data } = props;

    return (
        <Item.Group divided  >
            {data.map(({ slug, title, id, text, comments }) => {
                function checkComments(comments) {
                    if (comments.length < 1) return "No comments yet";
                    if (comments.length === 1) return comments.length + " comment";
                    if (comments.length > 1) return comments.length + " comments";
                }


                return <Item as={Link} to={`${slug}`} key={id}>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>{title}</Item.Header>
                        <Item.Description>{text}</Item.Description>
                        <Item.Extra>
                            <Icon color='red' name='comment' /> {checkComments(comments)}

                        </Item.Extra>
                    </Item.Content>



                </Item>
            })}

        </Item.Group>
    );
}
const mapStateToProps = (state) => {

    return {
        ...state,
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);
