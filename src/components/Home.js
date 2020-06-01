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



    return (
        <Item.Group divided unstackable>



            {data.map(({ slug, title, id, text }) => {

                return <Item as={Link} to={`${slug}`} key={id}>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>{title}</Item.Header>
                        <Item.Description>{text}</Item.Description>
                        <Item.Extra>
                            <Icon color='red' name='comment' /> {!filteredItems(slug).length <= 0 ? filteredItems(slug).length + " comments" : "No comment yet"}

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
