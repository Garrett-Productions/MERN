import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])

    return(
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div>
                            <ul>
                            <p key={index}>This is my product: {product.title}</p>
                            <li>It costs: {product.price}</li>
                            <li>Description: {product.desc}</li>
                            <Link to={`/products/${product._id}`}> View: {product.title}</Link>
                            <hr/>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;