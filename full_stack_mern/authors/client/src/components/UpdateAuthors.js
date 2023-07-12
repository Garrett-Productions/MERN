import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom'

const UpdateAuthors = ({authorList, setAuthorList, errors, setErrors}) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    // const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const [isValid, setIsValid] = useState(false)
    
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
        axios.patch(`http://localhost:8000/api/authors/${id}`,
        {
            name
        })
        .then(res => {
            console.log(res.data)
            console.log(authorList)
            const mappedAuthor = authorList.map((obj) =>
                ( obj._id == res.data._id ) ? res.data : obj)
            setAuthorList(mappedAuthor)
            // setIsValid(true)
            // setHasBeenSubmitted(true)
            navigate('/');
            })
        .catch(err => {
            console.log("look at your error on update here.", err.response.data.errors)
            setErrors(err.response.data.errors)
    }) 
}
    return (
    <div style={{margin:"0 auto"}}>
        <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
        <p>Edit Author's name</p>
        <Link to={'/authors'}>Home</Link>
        <form onSubmit={onUpdateProduct} style={{ width:"250px",border:"1px black solid", margin:"0px auto"}} >
            <label>Name: </label><br/>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/> 
            {
                    errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
                }
                <input type='submit' style={{color:"white", backgroundColor:"blue", margin:"8px"}} />
                <Link to={'/'}><button style={{color:"white", backgroundColor:"blue"}}type='submit'>Cancel</button></Link>
        </form>
    </div>
    )
}

export default UpdateAuthors;