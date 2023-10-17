import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom'

const EditOne = ({noteList, setNoteList, errors, setErrors}) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(res => {
            console.log("Data is here", res.data)
            setBody(res.data.body);
            setTitle(res.data.title)
        })
        .catch(err => console.log(err))
    }, [])


    const deleteNote = (noteId) => {
        axios.delete(`http://localhost:8000/api/notes/${noteId}`)
            .then(res => {
                console.log(res)
                console.log("asasasas")
                console.log("here is my note's id", noteId)
                removeFromDom(noteId)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = noteId => {
        setNoteList(noteList.filter(note => note._id != noteId));
    }
    const updateNote = (e, noteId) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/notes/${id}`,
        {
            title,
            body
        })
        .then(res => {
            console.log(res.data)
            console.log(noteList)
            const mappedNotes = noteList.map((note)=> 
                ( note._id == noteId ) ? res.data : note)
            setNoteList(mappedNotes)
            navigate('/')
        })
        .catch(error => {
            console.log("Here is your error on update' '", error.response.data.errors)
            setErrors([...errors, error.response.errors])
        })
    }


    return(
        <div style={{maxWidth:"400px", margin:"0 auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{fontWeight:"bold"}}> Note Wall</h1>
                <Link to={'/'}>go back home</Link>
            </div>
            <form onSubmit={updateNote} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}}>
                <label>Note Title: </label><br/>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                {
                errors.title ? <p style={{color:"red"}}>{errors.title.message}</p> : null
                }
                <label>Note Body:</label><br/>
                {
                    errors.body ? <p style={{color:"red"}}>{errors.body.essage}</p> : null
                }
                <input type='text' value={body} onChange={(e) => setBody(e.target.value)}/>
                <button style={{color:"white", backgroundColor:"blue"}} type='submit'>Edit Note!</button>
                <button onClick={(e) => {deleteNote(id)}}>Delete</button>
            </form>
        </div>
    )}


export default EditOne;