import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const PlayerList = ({playerList, setPlayerList, preferredPosition, setPreferredPosition, removeFromDom}) => {
    // useEffect(()=> {
    //   axios.get("http://localhost:8000/api/players")
    //   .then((res) => {
    //     console.log("data of res here", res.data)
    //     setPlayerList(res.data)
    //   })
    //   .catch(err=> console.log(err))
    // }, [])

    const deletePlayer = (playerId) => {
          axios.delete(`http://localhost:8000/api/players/${playerId}`)
            .then(res => {
              console.log(res)
              removeFromDom(playerId)
          })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1 style={{fontWeight:"bold"}}>Manage Players |<Link to={'/status/game/1'}> Manage Player Status</Link></h1>
        <div style={{maxWidth:"350px", margin:"0 auto"}}>
          <div style={{border:"solid black 2px"}}>
            <h2>List |<Link to={'/players/addplayer'}> Add Player</Link></h2> 
            <table className ="table table-striped" style={{border: "1px solid black", margin:"0px auto"}}>
                    <thead>
                        <tr>
                            <th>Team Name | Preferred Position | Action</th>
                        </tr>
                    </thead>
                    {
                    playerList.map((player, i) => {
                        return (
                        <tbody>
                            <div key ={i} style={{width:"300px"}}>
                                <tr style={{display:"flex", justifyContent:"space-between"}}>
                                    <td>{player.name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <button style={{color:"red"}}onClick={() => (deletePlayer(player._id))}>Delete </button>                                </tr>
                            </div>
                        </tbody>
                    )}
                )}
            </table>
        </div>
    </div>
  </div>
  )
}

export default PlayerList;

