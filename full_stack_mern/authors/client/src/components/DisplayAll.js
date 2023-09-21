import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const DisplayAll = ({authorList, setAuthorList, removeAuthor}) => {
    const navigate = useNavigate()

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => {
            removeAuthor(authorId)
            navigate('/')
        })
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log("data of res here",res.data)
                setAuthorList(res.data)
                setAuthorList(res.data.sort((authorA, authorB) => authorA.name.localeCompare(authorB.name)))
            })
    }, [])


    return (
        <div >
            <h1 style={{fontWeight:"bold"}}>Favorite Authors</h1>
            <p>We have quotes by:</p>
            <div style={{width:"500px", margin:"0 auto"}}>
                <div style={{display:"flex", margin:"0 auto", justifyContent:"space-between", margin:"5"}}> 
                    <Link to={'authors'}>Add an Author</Link>  
                    {/* <button style={{backgroundColor: "lightblue", color:"black", borderRadius:"20%", padding:"5"}} onClick = {sortAlphabetically}>Sort by Alphabetical order</button> */}
                </div>
                <table className ="table table-striped" style={{border: "2px solid black"}}>
                    <thead>
                        <tr>
                            <th>Author | Actions Available</th>
                        </tr>
                    </thead>
                    {
                    authorList.map((author, i) => {
                        return (
                        <tbody>
                            <div key ={i} style={{width:"500px"}}>
                                <tr style={{display:"flex", justifyContent:"space-between"}}>
                                    <td>{author.name}</td>
                                    <td><Link to={`/authors/${author._id}`}> Edit </Link> | 
                                    <button onClick={(e) => {deleteAuthor(author._id)}} style={{border:"1px solid black", background:"lightBlue", padding:"5px", boxShadow:"2px 2px black"}}>Delete {author.name}</button>
                                    </td>
                                </tr>
                            </div>
                        </tbody>
                    )}
                )}
            </table>
        </div>
    </div>
    )
}

export default DisplayAll;