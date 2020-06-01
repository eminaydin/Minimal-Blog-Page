import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { data } = props;

    return (
        <Segment.Group >

            {data.map(({ slug, title, id }) => {

                return <Link to={`${slug}`} key={id}>
                    <Segment>{title}</Segment>
                </Link>
            })}
        </Segment.Group>
    );
}
const mapStateToProps = (state) => {
    return {
        ...state,
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);
