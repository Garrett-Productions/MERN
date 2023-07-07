import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom, product, setProduct} = props;


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

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div>
                            <h2 key={index}>Product: {product.title}</h2>
                            <p>This is my product: {product.title}</p>
                            <p>It costs: {product.price}</p>
                            <p>Description: {product.desc}</p>
                            <Link to={`/products/${product._id}`}> View This Product: {product.title }</Link> | 
                            <Link to={`/products/edit/${product._id}`}>Edit This Product: {product.title} </Link> | 
                            <button onClick={(e) => (deleteProduct(product._id))}>Delete Product</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;