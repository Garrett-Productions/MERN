import React, { useState, useEffect } from 'react';

// With an api call we are expecting to get data in an arry, the pieces of data will be in objects in JSON
const PokemonAPI = (event) => {
    const [pokemonToMap, setPokemon] = useState([]);


useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(varWeUsuallyNameResponseOrRes => {
        return varWeUsuallyNameResponseOrRes.json()
    })
    .then(varWeUsuallyNameResponseOrRes => {
        setPokemon(varWeUsuallyNameResponseOrRes.results)
    })
    .catch((error)=> {
        console.log(error)
    })
    //pass in an empty array as a second parameter, so our useEffect doesnt re run upon render
}, []);
    return (
        <div style={{body:"0 auto", margin:"0 auto", width:250, color:"rebeccapurple"}}>
            <ol>
                {
                    pokemonToMap.map((pokemonObject, index) => {
                        return (<li key={index}>{pokemonObject.name}</li>)
                    })
                }
            </ol>
        </div>
    );
}

export default PokemonAPI;