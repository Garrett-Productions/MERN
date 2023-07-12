import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const AuthorForm = ({authorList, setAuthorList, errors, setErrors}) => {

    const [name, setName] = useState("");
    // const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/authors', {
                name,
        })
        .then(res => {
            console.log("check out my data bro", res.data)
            setName("")
            setAuthorList([...authorList, res.data]);
            console.log(authorList)
            navigate("/")
        })
        .catch(err => {
            console.log("look here!!!!!!!", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div style={{margin:"0 auto"}}>
            <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
            <p>Add a new Author: </p>
            <Link to={'/'}>Home</Link>
            <form onSubmit={onSubmitHandler} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
                <label>Name: </label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                {
                    errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
                }
                    <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Submit</button>
                    <Link to={'/'}><button style={{color:"white", backgroundColor:"blue"}}type='submit'>Cancel</button></Link>
            </form>
        </div>
    )
}
export default AuthorForm;
