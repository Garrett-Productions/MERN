import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayAll = ({movieList, setMovieList}) => {

    useEffect(()=> {
        axios.get('http://localhost:8000/api/movies')
        .then((res) => {
            console.log("Res data to sort here", res.data)
            setMovieList(res.data)
        })
        .catch(err => console.log(err))
        }, [])

    return (
        <div className="md:container md:mx-auto ">
            <div className='flex justify-between'>
                <h1 className='text-6xl'>Moldy Tomatoes</h1>
                <button style={{border:"black 1px solid", backgroundColor:"lightBrown", padding:"2px"}}>Logout</button>
            </div><br />
            <div style={{border:"1px black dotted"}}>
                <div className="flex justify-between">
                    <h2 className='text-left mx-20 text-2xl'>Movie List</h2>
                    <Link to={'/movies/new'} className='underline' style={{color:"blue"}}>Add a new movie</Link> 
                </div>
                <table className="table-auto border mx-20">
                    <thead>
                        <tr style={{display:'flex', justifyContent:"space-between"}}>
                            <th>Movie Title</th>
                            <th>Avg. Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                    movieList.map((movie, i) => {
                        return (
                                <tbody>
                                    <div key={i} style={{width:"600px"}}>
                                    <tr className='bg-gray-200' style={{display:'flex', justifyContent:"space-between"}}>
                                        <td>{movie.title}</td>
                                        {/* <td>{movie.rating}</td> */}
                                        <td>10</td>
                                        <td> 
                                            <Link to={`/movies/${movie._id}`} style={{color:"black", backgroundColor:"lightGreen", border:"black 1px solid", padding:"2px"}} >Read Reviews </Link>
                                            <Link to={`/movies/${movie._id}/review`} style={{color:"white", backgroundColor:"lightGreen", border:"black 1px solid", padding:"2px"}} >Write a Review</Link>
                                        </td>
                                    </tr>
                                    </div>
                                </tbody>
                                )
                            })  
                        }
                </table>
            </div>
        </div>
    )
}

export default DisplayAll