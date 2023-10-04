import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom'

const EditOne = ({storeList, setStoreList, errors, setErrors, open, setOpen}) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store_products/${id}`)
        .then(res => {
            console.log("Data is here", res.data)
            setName(res.data.name);
            setNumber(res.data.number)
            setOpen(res.data.open)
            
        })
        .catch(err => console.log(err))
    }, [])

    const updateOne = (e, storeId) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/store_products/${id}`,
        {
            name,
            number,
            open
        })
        .then(res => {
            console.log(res.data, "reeeees")
            console.log(storeList)
            const mappedStores = storeList.map((store)=> 
                ( store._id == storeId ) ? res.data : store)
            setStoreList(mappedStores)
            navigate('/')
        })
        .catch(err => {
            console.log("look here!!!!!!!", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

return(
    <div style={{width:"700px", margin:"0px auto"}}>
        <h1 style={{fontWeight:"bold"}}>Store Finder</h1>
        <p>Edit store</p>
        <div style={{width:"400px", margin:"0px auto"}}>
        <Link to={'/'}>Go back home</Link>
        <form onSubmit={updateOne} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
            <label>Store Name: </label><br/>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            {
            errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
            }
            <label>Store Number:</label><br/>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            {
            errors.number ? <p style={{color:"red"}}>{errors.number.message}</p> : null
            }<br />
            <input style={{margin:"5px"}}
                    type='checkbox'
                    onChange={(e)=> setOpen(e.target.checked)}
                    />
            <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Edit Store</button>
        </form>
        </div>
    </div>
)
}

export default EditOne;