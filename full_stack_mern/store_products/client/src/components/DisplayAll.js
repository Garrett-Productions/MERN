import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const DisplayAll = ({storeList, setStoreList}) => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/store_products")
            .then((res) => {
                console.log("data of res here",res.data)
                setStoreList(res.data)
            })
    }, [])

    const deleteStore = (storeId) => {
        axios.delete(`http://localhost:8000/api/store_products/${storeId}`)
            .then(res => {
                console.log(res.data)
                console.log("here is my store's id", storeId)
                removeFromDom(storeId)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    const removeFromDom = storeId => {
        setStoreList(storeList.filter(store => store._id != storeId));
    }
    
    const sortLowest= () => {
        setStoreList(storeList.sort((storeA, storeB) => (storeA.number > storeB.number) ? 1 : -1));
        console.log('sorting data')
        navigate('/')
    }
    return (
        <div style={{margin:"0 auto", width:"600px"}} >
            <h1 style={{fontWeight:"bold"}}>Store Finder</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>Find stores in your area!</p>
                <button onClick = {sortLowest}>Sort by Lowest to Highest</button><br />
            </div>
            <div style={{width:"380px", margin:"0 auto"}}>
                <table className ="table table-striped" style={{border: "1px solid black"}}>
                    <thead>
                        <tr>
                            <th>Store | Store Number | Open | Remove</th>
                        </tr>
                    </thead>
                    {
                    storeList.map((store, i) => {
                        return (
                        <tbody>
                            <div key ={i}>
                                <tr style={{display:"flex", justifyContent:"space-between"}}>
                                    <td><Link to={`/stores/${store._id}`}>{store.name}</Link></td>
                                    <td>{store.number}</td>
                                    <td>{store.open == true ? "Open": "Closed"}</td>
                                    <button onClick={(e) => {deleteStore(store._id)}}>Delete</button>
                                </tr>
                            </div>
                        </tbody>
                    )}
                )}
            </table>
            <Link to={'/stores/add'}>Can't find your store?</Link>
        </div>
    </div>
    )
}

export default DisplayAll;