import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const CreateOne = ({noteList, setNoteList, errors, setErrors}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/note', {
            title,
            body
        })
        .then((res) => {
            console.log("check out my data", res.data)
            setTitle("")
            setNoteList([...noteList, res.data])
            // console.log(noteList)
            navigate('/')
        })
        .catch(err => {
            console.log("Error, look here!", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div style={{maxWidth:"400px", margin:"0 auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{fontWeight:"bold"}}> Note Wall</h1>
                <Link to={'/'}>go back home</Link>
            </div>
            <p>Write a new note</p>
            <form onSubmit={onSubmitHandler} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
                <label>Note Title: </label><br/>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                {
                errors.title ? <p style={{color:"red"}}>{errors.title.message}</p> : null
                }
                <label>Note Body:</label><br/>
                <input type='text' value={body} onChange={(e) => setBody(e.target.value)}/>
                {
                errors.body ? <p style={{color:"red"}}>{errors.body.message}</p> : null
                }
                <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Write This Note!</button>
            </form>
        </div>
    )
}

export default CreateOne;