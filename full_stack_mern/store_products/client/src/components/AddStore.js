import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';

const AddStore = ({storeList, setStoreList, errors, setErrors, name, setName, number, setNumber, open, setOpen}) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/store_product', {
            name,
            number,
            open
        })
        
        .then((res) => {
            console.log("check out my data", res.data)
            setName("")
            setNumber(0)
            setOpen(open)
            setStoreList([...storeList, res.data])
            navigate('/')
        })
        .catch(err => {
            console.log("Error, look here!", err.response.data)
            setErrors(err.response.data.errors)
        })
    }


    return(
        <div style={{width:"700px", margin:"0px auto"}}>
            <h1 style={{fontWeight:"bold"}}>Store Finder</h1>
            <p>Add a new store</p>
            <div style={{width:"400px", margin:"0px auto"}}>
            <Link to={'/'}>Go back home</Link>
            <form onSubmit={onSubmitHandler} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
                <label>Store Name: </label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                {
                errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
                }
                <label>Store Number:</label><br/>
                <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
                {
                errors.number ? <p style={{color:"red"}}>{errors.number.message}</p> : null
                }<br/>
                <input style={{margin:"5px"}}
                    type='checkbox'
                    value={open}
                    checked={storeList.open}
                    onChange={(e)=> setOpen(e.target.checked)}
                    />
                <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Add a New Store</button>
            </form>
            </div>
        </div>
    )
}

export default AddStore;