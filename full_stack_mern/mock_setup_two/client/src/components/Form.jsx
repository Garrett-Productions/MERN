import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Form = ({mockList, setMockList, errors, setErrors}) => {

    const [title, setTitle] = useState("");
    // const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/mock', {
                title,
        })
        .then(res => {
            console.log("check out my data", res.data)
            setTitle("")
            setMockList([...mockList, res.data]);
            console.log(mockList)
            navigate("/mock")
        })
        .catch(err => {
            console.log("look here!!!!!!!", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div style={{margin:"0 auto"}}>
            <h1 style={{fontWeight:"bold"}}>Favorite Mock Stuff</h1>
            <p>Add a new product: </p>
            <Link to={'/mock'}>Home</Link>
            <form onSubmit={onSubmitHandler} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
                <label>title: </label><br/>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                {
                    errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
                }
                    <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Submit</button>
                    <Link to={'/'}><button style={{color:"white", backgroundColor:"blue"}}type='submit'>Cancel</button></Link>
            </form>
        </div>
    )
}
export default Form;
