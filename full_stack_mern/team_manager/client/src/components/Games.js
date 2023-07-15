import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import GameSetup from './GameSetup';
import PlayerStatus from './PlayerStatus';
import axios from 'axios';


const Games = ({playerList, setPlayerList}) => {
    const { num } = useParams();

    if (num > 3 || num < 1) {
        return"Invalid Game"
    }
// use ternary instead, to note...
    return (
        <div>
        <h1 style={{fontWeight:"bold"}}><Link to={'/players/list'}>Manage Players</Link> |<Link to={'/status/game/1'}> Manage Player Status</Link></h1>
        <div style={{maxWidth:"500px", margin:"0 auto"}}>
        <div style={{border:"solid black 2px"}}>
            <h2> Player Status - Game {num}</h2><br/>
            <GameSetup />
            <table className ="table table-striped" style={{border: "1px solid black", margin:"0px auto"}}>
            <thead>
                    <tr>
                        <th>Player Name </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                {
                playerList.map((player, i) => {
                    return (
                        <PlayerStatus key={player._id} playerList = {playerList} setPlayerList={setPlayerList} player={player} style={{width:"300px"}}/>
                        )}
                    )}
                </tbody>
            </table>
        </div>
    </div>
    </div>
    )
}

export default Games;