import React from 'react';
import { Item, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { data } = props;

    const filteredItems = (slug) => {
        return props.comments.filter(comment => {
            return comment.postId === slug
        });
    }
    const checkComments = (slug) => {
        if (filteredItems(slug).length === 0) return "No comments yet";
        if (filteredItems(slug).length == 1) return filteredItems(slug).length + " comment";
        if (filteredItems(slug).length > 1) return filteredItems(slug).length + " comments"
    }


    return (
        <Item.Group divided  >



            {data.map(({ slug, title, id, text }) => {

                return <Item as={Link} to={`${slug}`} key={id}>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>{title}</Item.Header>
                        <Item.Description>{text}</Item.Description>
                        <Item.Extra>
                            <Icon color='red' name='comment' /> {checkComments(slug)}

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
