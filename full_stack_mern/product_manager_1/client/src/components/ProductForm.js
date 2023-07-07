import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductForm= (props) => {

    const { product, setProduct } = props; //lifted state from main
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState(0)
    const [ desc, setDesc ] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault(); // since we are using axios, we dont need our useEffect hook
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc // shorthand syntax que funciona perfectamente bien
        })
        .then(res => {
            console.log(res)
            console.log(res.data, "this is my data, look here") //tracking our data
            setTitle("")
            setPrice(0)
            setDesc("")
            setProduct([...product, res.data]); // this was added after we refactored our ProductList to lift state from main

        })
        .catch(err=> console.log(err,"look here for the error mate"))
    }

    return (
        <div style={{margin:"0 auto"}}>
            <h1 style={{textDecoration:'underline', color:'darkBlue'}}>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Title of Product:</label>
                    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Price of Product:</label>
                    <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/> 
                <label>Description of Product:</label>
                    <input type='text' value={desc} onChange={(e)=> setDesc(e.target.value)} />
                <input type='submit'Submit />
            </form>
        </div>
    )
}
export default ProductForm;