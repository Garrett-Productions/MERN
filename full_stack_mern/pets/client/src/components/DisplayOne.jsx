import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate} from 'react-router-dom';

const DisplayOne = ({removeFromDom}) => {
    const {id} = useParams();
    const [pet, setPet] = useState([]); // to push to app jsx to pass back down
    const [likes, setLikes] = useState(0); // to capture a like in state
    const [show, setShow] = useState(true); // to conditionally render a button
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            console.log(res.data)
            setPet(res.data)
        })
        .catch(err => console.log(err));
    }, [])

    const deletePet = (petId) => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(res => {
                removeFromDom(petId)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleLikeClick = () => {
        setLikes(likes + 1);
        setShow(false)
        }

    return (
        <div style={{width:"700px", margin:"0px auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h1 className='text-5xl'> Pet Shelter</h1>
                <Link to={'/'} style={{color:"blue"}} className='underline'>Back To home</Link>
            </div><br />
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h2 className='text-left mx-20 text-2xl'>Details about: {pet.name}</h2><br />
                <button onClick ={(e) => {deletePet(pet._id)}} style={{border:"1px solid black", background:"red", padding:"5px", boxShadow:"3px 3px black", textDecoration:"underline"}}>Adopt {pet.name}</button>
            </div><br />
            <div style={{border:"1px solid black", width:"550px"}}>
                <h3> Pet Type: {pet.type}</h3>
                <h3> Description: {pet.description}</h3>
                <p>Skills:
                <ul>
                    {pet.skillOne ? <li>{pet.skillOne}</li> : "" }
                    {pet.skillTwo ? <li>{pet.skillTwo}</li> : "" }
                    {pet.skillThree ? <li>{pet.skillThree}</li> : "" }
                </ul>
                </p><hr/>
                <div>
                <h3>Likes: {likes}</h3>
                {show ? 
                <div style={{display:"flex", justifyContent:"center", alignItems:"baseline" }}>
                    <br/>
                <button 
                    style={{border:"1px solid black", borderRadius:"50%", background:"lightBlue", padding:"5px", boxShadow:"1px 1px black", margin:"2px"}} 
                    onClick={handleLikeClick}>Like
                </button>
                    <p>Give this pet some love mate</p>
                </div>
                : ''}</div>
            </div>
        </div>
    )
}

export default DisplayOne;