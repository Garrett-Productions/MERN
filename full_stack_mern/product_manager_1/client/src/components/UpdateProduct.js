import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ProductUpdate = (props) => {
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price)
                setDesc(res.data.desc);
            })
            .catch(err => console.log(err))
    }, []) // dependency array here...

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/edit/${id}`, 
        {
            title,
            price,
            desc
        })
        .then(res => {
            console.log(res)
            navigate('/products');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Your Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Set New Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label> Set New Price</label>
                    <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label> Set New Description</label>
                    <input type='text' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
                </p>
                <input type='submit' /> 
            </form><hr />
            <Link to={'/products'}>Return to Main Product Page</Link>
        </div>
    )
}

export default ProductUpdate;