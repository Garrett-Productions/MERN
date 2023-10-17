import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const DisplayAll = ({ noteList, setNoteList}) => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
        .then((res) => {
            console.log("Res data here", res.data)
            setNoteList(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const sortNewest = () => {
        setNoteList(noteList.sort((noteA, noteB) => noteB.createdAt.localeCompare(noteA.createdAt)));
        console.log("sorted data")
        navigate("/")
    }
    const sortOldest= () => {
        setNoteList(noteList.sort((noteA, noteB) => noteA.createdAt.localeCompare(noteB.createdAt)));
        console.log('sorting data')
        navigate('/')
    }
    return(
        <div style={{ width:"fit-content", margin:"0 auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{fontWeight:"bold"}}> Note Wall</h1>
                <Link to={'/notes/new'}>Write Note!</Link>
            </div>
            <span>
                <p>Leave a Note!</p>
                <button onClick = {sortNewest}>Sort by Newest Note 1st</button>
                <button onClick = {sortOldest}>Sort by Oldest Note</button>
            </span><hr />
            <table className ="table table-striped" style={{border: "2px solid black"}}>
                <thead>
                    <tr>
                        <th>Note title and content</th>
                    </tr>
                </thead>
                {
                noteList.map((note,i) => {
                    return (
                        <tbody>
                            <div key={i} style={{width:"500px"}}>
                                <tr style={{display:"flex", justifyContent:"space-between"}}>
                                    <td>{note.title}</td>
                                    <td>{note.body}</td>
                                    <td><Link to={`/notes/${note._id}`}>Edit</Link></td>
                                </tr>
                            </div>
                        </tbody>
                        )
                    })
                }
            </table>
            {/* <Link to={'/notes/random'}>Random Note</Link> */}
        </div>
    )
}

export default DisplayAll;