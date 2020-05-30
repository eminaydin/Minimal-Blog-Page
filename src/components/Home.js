import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { data } = props;
    console.log(props);

    return (
        <Segment.Group raised>

            {data.map(product => {

                return <Link to={`${product.slug}`}>
                    <Segment>{product.title}</Segment>
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
