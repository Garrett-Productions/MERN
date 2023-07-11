import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom'


const UpdateAuthors = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log("check out my data bro", res.data)
                setName(res.data.name);
                // console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const onUpdateProduct = (e) => {
        e.preventDefault();
        axios.patch(`https://localhost:8000/api/authors/${id}`,
        {
            name
        })
        .then(res => {
            console.log(res)
            navigate('/');
        })
        .catch(err => console.log(err))
    } 
    return (
    <div style={{margin:"0 auto"}}>
        <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
        <p>Edit Author's name</p>
        <Link to={'/authors'}>Home</Link>
        <form style={{ width:"250px",border:"1px black solid", margin:"0px auto"}} onSubmit={onUpdateProduct}>
            <label>Name: </label><br/>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='submit' style={{color:"white", backgroundColor:"blue", margin:"8px"}} />
                {/* <button style={{color:"white", backgroundColor:"blue"}}type='submit'>Submit</button> */}
        </form>
    </div>
)
    }

export default UpdateAuthors;