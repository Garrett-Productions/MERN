import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})//initail state to an empty object because the response we get from our API call will be objects
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1> Individual Product</h1>
            <p>Title: {product.title} </p>
            <p>Price: {product.price} </p>
            <p>Description: {product.desc} </p> <hr />
            <Link to={'/products'}>Return to Main Product Page</Link>
        </div>
    );
}
export default OneProduct;