import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const ViewOne = ({ }) => {
    const [storeList, setStoreList]= useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store_products/${id}`)
            .then(res => {
                console.log(res.data)
                setStoreList(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{width:"800px", margin:"0px auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h1> Store Finder</h1>
                <Link to={'/'}>Go back home</Link>
            </div><hr/>
            <h3>Store Name: {storeList.name}</h3>
            <h3>Number: {storeList.number}</h3>
            <p>Status: {storeList.open == true ? "Open": "Closed"}</p>
            <Link to={`/stores/edit/${id}`}>Edit Store </Link>
        </div>
    )
}

export default ViewOne;