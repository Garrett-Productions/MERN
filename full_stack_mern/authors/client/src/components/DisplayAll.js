import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const DisplayAll = ({authorList, setAuthorList}) => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log("data of res here",res.data)
                // console.log(authorList)
            })
    })
    return (
        <div style={{margin:"0 auto"}}>
            <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
            <p>We have quotes by:  </p>
            <Link to={'authors'}>Add an Author</Link>
            <div style={{margin:"0px auto", width:"450px"}}>                        
                    {
                    authorList.map((author, i) => {
                        return (                
                            <table className ="table table-striped" style={{border: "2px solid black"}}>
                            <thead>
                                <tr>
                                    <th scope = "col">Author</th>
                                    <th scope = "col">Actions Available:</th>
                                </tr>
                            </thead>
                            <tbody>
                            <div key ={i}>
                                <tr style={{display:"flex", justifyContent:"space-around"}}>
                                    <td >{author.name}</td>
                                    <Link to={`/authors/${author._id}`}> Edit </Link>
                                    <Link to={`/authors/${author._id}`}> Delete </Link>
                                </tr>
                            </div>
                            </tbody>
                        </table>
                    )}
                )}
        </div>
    </div>
    )
}

export default DisplayAll;