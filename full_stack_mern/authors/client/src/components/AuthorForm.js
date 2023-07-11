import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const AuthorForm = ({authorList, setAuthorlist}) => {

    const [name, setName] = useState("");
    const navigate = useNavigate()


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name,
        })
        .then(res => {
            console.log("check out my data bro", res.data)
            setName("")
            setAuthorlist([...authorList, res.data]);
            console.log(authorList)
        })
        .catch(err => console.log(err, "check the error out"))
        navigate("/")
    }
    return (
        <div style={{margin:"0 auto"}}>
            <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
            <p>Add a new Author: </p>
            <Link to={'/'}>Home</Link>
            <form style={{ width:"250px",border:"1px black solid", margin:"0px auto"}} onSubmit={onSubmitHandler}>
                <label>Name: </label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    {/* <button style={{color:"white", backgroundColor:"blue", margin:"8px"}}type='submit'>Cancel</button> */}
                    <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AuthorForm;
