import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const People = ({id, setID, peepOrPlan, setPeepOrPlan}) => {
  const [starWarsPersonData, setStarWarsPersonData] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
  axios.get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data)
        setStarWarsPersonData(res.data)
      })
      .catch((err) => {
        console.log("LOOK HERE", err) 
      if(err.response.status == 404){
        // var abc = "this is a message"   We were using this var to make sense of % 20 in URL/s
        navigate(`/error/${encodeURI(err.message)}`)
      }})
  }, [id]); //pass props here to run useEffect on each render and render our props we've passed in here initial render
  return ( //now render our api data by calling the keys and setting them to state in our return 
  <>
  <Form peepOrPlan={peepOrPlan} setPeepOrPlan={setPeepOrPlan} id={id} setID={setID}/>
    <div className='container'> 
      <div className="card"> 
        <div className='card-body'>
          <div className='card-title'>Name: {starWarsPersonData.name}</div>
          <ul className='list-group'>
            <p className='card-text'>Height: {starWarsPersonData.height}</p>
            <p className='card-text'>Hair Color: {starWarsPersonData.hair_color}</p>
            <p className='card-text'>Eye Color: {starWarsPersonData.eye_color}</p>
            <p className='card-text'>Skin Color: {starWarsPersonData.skin_color}</p>
            <p className='card-text'>HomeWorld: {starWarsPersonData.homeworld}</p>
          </ul>
        </div>
      </div>
      <hr />
      <Link to={"/"}>Go To Home Base Young Padawan</Link>
    </div>
    </>
  )
}

export default People;