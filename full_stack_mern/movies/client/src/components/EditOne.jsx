import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditOne = ({movieList, setMovieList}) => {
    const {id} = useParams();
    const [name, setName] = useState('')
    // const [rating, setRating] = useState('')
    const [reviews, setReviews] = useState([])
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
            setTitle(res.data.title)
        })
        .catch(err => console.log(err));
    }, [])

    const updateMovie = (e, movieId) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/movie/${id}`,
        {
            name            
            // rating,
        })
        .then(res => {
            console.log(res.data)
            console.log(movieList)
            const mappedMovies = movieList.map((movie)=> 
            ( movie._id == movieId ) ? res.data : movie)
            setMovieList(mappedMovies)
            setReviews([...reviews, reviews])
            navigate('/movies')
        })
        .catch(error => {
            console.log("Mapped movies on update", error.response.data.errors)
            setErrors([...errors, error.response.data.errors])
        })
    }
return(
        <div className='md:container md:mx-auto'>
            <div className='flex justify-between'>
                <h1 className='text-6xl'>Moldy Tomatoes</h1>
                <button style={{border:"black 1px solid", backgroundColor:"lightBrown", padding:"2px"}}>Logout</button>
            </div><br />
            <div style={{border:"1px black dotted"}}>
                <h1 className='text-3xl'>Add a review for {title}</h1>
                <form onSubmit={updateMovie} style={{margin:"15px"}}>
                    <label>Your Name: </label>
                        <input type='text' value={name} style={{border:"1px solid black", margin:"2px"}} onChange={(e) => setName(e.target.value)}/><br />
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
                        <textarea value={reviews} style={{border:"black 1px solid", width:"200px", margin:"2px"}}cols="3" rows="3" onChange={(e) => setReview(e.target.value)}/><br />
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button style={{color:"black",border:"1px black solid", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type='submit'>Submit</button>
                        <Link to={'/movies'} style={{color:"black",border:"1px black solid", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type=''>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditOne;