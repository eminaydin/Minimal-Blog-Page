import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';

const ProductDetails = (props) => {




    return (
        <div>
            {props.post.text}
            <Input />
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    let slug = ownProps.match.params.slug;

    return {
        post: state.posts.find(post => post.slug === slug)
    }
}
export default connect(mapStateToProps)(ProductDetails);
