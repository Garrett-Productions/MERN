import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // With Axios we can define, Get or Post request, it's replacing fetch
const AxiosPokemonAPI = (event) => {
    const [pokemonAPI, setPokemonAPI] = useState([]);


    useEffect(()=> {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => {
            console.log(res.data.results); // always check to make sure we are indeed getting our call answered!
             setPokemonAPI(res.data.results); //res.DATA!, When we API call res.data!
        }) 
        .catch((error)=>{
            console.log(error)
        })

    }, [])
    return(
        <div style={{margin:"0 auto", body:"0 auto", width:250}}>
            <ol>
                {
                    pokemonAPI.map((object, index) => {
                        return (
                            <li key = {index}>{object.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default AxiosPokemonAPI;