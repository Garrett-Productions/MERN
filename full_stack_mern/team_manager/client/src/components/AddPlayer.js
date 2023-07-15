import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const AddPlayer = ({playerList, setPlayerList, errors, setErrors}) => {

    const [name, setName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState('')

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/players', {
                name,
                preferredPosition
        })
        .then(res => {
            console.log("Check out my data here", res.data)
            setName("")
            setPreferredPosition('')
            setPlayerList([...playerList, res.data]);
            navigate("/players/list")
        })
        .catch(err => {
            console.log("look here!", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
        <h1 style={{fontWeight:"bold"}}>Manage Players |<Link to={'/status/game/1'}> Manage Player Status </Link></h1>
        <div style={{maxWidth:"650px", margin:"0px auto", padding:"5px"}}>
            <div style={{border:"solid black 2px"}}>
            <h2> <Link to={'/players/list'}>List</Link> | Add Player</h2> 
            <form onSubmit={onSubmitHandler} style={{ width:"400px",border:"1px black solid", margin:"0px auto"}}>
                <label>Player Name: </label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/><br/>
                {
                    errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null
                }
                <label>Preferred Position: </label><br/>
                <input type='text' value={preferredPosition} onChange={(e) => setPreferredPosition(e.target.value)}/><br/>
                <button style={{color:"white", backgroundColor:"red"}}type='submit'>Add</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default AddPlayer;