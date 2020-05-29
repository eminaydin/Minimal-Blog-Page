import React, { useState, useEffect } from 'react';

const ProductDetails = ({ match, data }) => {
    const [id, setId] = useState(null);
    const currentItem = data.find(eachProduct => eachProduct.slug === match.params.slug);
    useEffect(() => {

        console.log(currentItem);

    }, []);

    return (
        <div>
            {currentItem.text}
        </div>
    );
}

export default ProductDetails;
