import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './Form';
import { Link } from 'react-router-dom';

const Planets = (props) => {
  const {id, setID} = props;
  const {peepOrPlan, setPeepOrPlan} = props;
  const [starWarsPlanetData, setStarWarsPlanetData] = useState("");

  useEffect(() => {
  axios.get(`https://swapi.dev/api/planets/${id}`)
  .then((res) => {
    console.log(res.data)
    setStarWarsPlanetData(res.data)
  })
  .catch((err) => console.log(err))
}, [id]);

  return (
    <>
    <Form peepOrPlan={peepOrPlan} setPeepOrPlan={setPeepOrPlan} id={id} setID={setID}/>
      <div className='container'> 
        <div className="card"> 
          <div className='card-body'>
            <div className='card-title'>Name: {starWarsPlanetData.name}</div>
            <ul className='list-group'>
              <p className='card-text'>Climate: {starWarsPlanetData.climate}</p>
              <p className='card-text'>Terrain: {starWarsPlanetData.terrain}</p>
              <p className='card-text'>Surface Water: {starWarsPlanetData.surface_water}</p>
              <p className='card-text'>Population: {starWarsPlanetData.population}</p>
            </ul>
          </div>
        </div>
        <hr />
        <Link to={"/"}>Go To Home Base Young Padawan</Link>
      </div>
      
    </>
  )
}

export default Planets;