import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CreateOne = ({movieList, setMovieList}) => {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    // const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState([]);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movie', {
            title,
            name,
            // rating,
        })
        .then((res) => {
            console.log("Res data here", res.data)
            setTitle("");
            setName("");
            setReviews([...reviews, res.data.review])
            // setRating(0);
            setMovieList([...movieList, res.data]);
            console.log(movieList);
            console.log("asasasa",reviews);
            navigate('/movies');
        })
        .catch(error => {
            //! Dig through err to render errors conditionally
            console.log("Errors, Look here", error.response.data.errors)
            setErrors(error.response.data.errors)
        })
    }

    return(
        <div className='md:container md:mx-auto'>
            <div className='flex justify-between'>
                <h1 className='text-6xl'>Moldy Tomatoes</h1>
                <button style={{border:"black 1px solid", backgroundColor:"lightBrown", padding:"2px"}}>Logout</button>
            </div><br />
            <div style={{border:"1px black dotted"}}>
                <h1>Submit a movie and a Review</h1>
                <form onSubmit={onSubmitHandler} style={{margin:"15px"}}>
                    <label>Movie Title: </label>
                        <input type='text' value={title} style={{border:"1px solid black"}} onChange={(e) => setTitle(e.target.value)}/><br />
                    <label>Your Name: </label>
                        <input type='text' value={name} style={{border:"1px solid black"}} onChange={(e) => setName(e.target.value)}/><br />
                    {/* <label> Rating: </label>
                        <select type='number' name='rating' value={rating}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        style={{border:"1px solid black", width:"100px"}} 
                        onChange={(e) => setRating(e.target.value)}
                        <br /> */}
                    <label>Your Review: </label>
                        <textarea value={reviews} type='text' style={{border:"black 1px solid", width:"200px"}}cols="4" rows="4" onChange={(e) => setReviews(e.target.value)}/><br />
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button style={{color:"black",border:"1px black solid", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type='submit'>Submit</button>
                        <Link to={'/movies'} style={{color:"black",border:"1px black solid", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type=''>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateOne;