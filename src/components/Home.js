import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const Home = ({ data }) => {

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

export default Home;
