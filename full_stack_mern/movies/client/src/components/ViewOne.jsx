import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate} from 'react-router-dom';

const ViewOne = ({deleteMovie, movieList, setMovieList}) => {
    const {id} = useParams();
    const [name, setName] = useState('');
    // const [rating, setRating] = useState('');
    const [title, setTitle] = useState('')
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
            setTitle(res.data.title)
            setReviews(res.data.review)
        })
        .catch(err => console.log(err));
    }, [])

    const deleteThisMovie = (movieId) => {
        axios.delete(`http://localhost:8000/api/movie/${movieId}`)
            .then(res => {
                deleteMovie(movieId)
                navigate('/movies')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="md:container md:mx-auto ">
        <div className='flex justify-between'>
            <h1 className='text-6xl'>Moldy Tomatoes</h1>
            <button style={{border:"black 1px solid", backgroundColor:"lightBrown", padding:"2px"}}>Logout</button>
        </div><br />
        <div style={{border:"1px black dotted"}}>
                <h2 className='text-left mx-20 text-2xl'>Reviews For {title}</h2>
            <table style={{width:"600px"}}className="table-auto border mx-20 ">
                <thead>
                    <tr style={{display:'flex', justifyContent:"space-between"}}>
                        <th>Reviewer</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                    <tbody style={{width:"800px"}}>
                        <tr className='bg-gray-200' style={{display:'flex', justifyContent:"space-between"}}>
                            <td>{name}</td>
                            {/* <td>{movie.rating}</td> */}
                            <td>10</td>
                            {
                                movieList.map((movieReview, i)=> {
                                    return (
                                        <td>
                                            <div key={i} style={{width:"600px"}}>
                                                {movieReview.review}
                                            </div>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
            </table><br/>
            <button style={{border:"black solid 1px", color:"white", backgroundColor:"red", padding:"2px", borderRadius:"10%"}} onClick={deleteThisMovie}>Delete Movie</button>
        </div>
    </div>
    )
}

export default ViewOne;