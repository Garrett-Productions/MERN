import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlayerStatus = ({playerList, setPlayerList, player}) => {
    const [playerStatus, setPlayerStatus] = useState("")
    const { num } = useParams();
    console.log(num)
    console.log(player.name, player.gameOne)
    const gameStatus = 
        num == 1 ? 
            player.gameOne 
        : num == 2 ? 
            player.gameTwo 
        : num == 3 ? 
            player.gameThree
        : 'Undecided'
    // ? if its game one then set gameStatus = the game one status : 
    // I think when they select whatever radio button I can have that trigger an onChange 
    const updateStatus = (e, playerId) => {
        if (num > 3 || num < 1) {return}
        const currentGame = num == 1 ? 'gameOne' : num == 2 ? 'gameTwo' : num == 3 ? 'gameThree' : null
        axios.patch(`http://localhost:8000/api/players/${playerId}`, {
            [currentGame]: e.target.value,
            // gameOne: 'Not Playing'
        })
        .then((res) => {
            console.log(res.data)
            const updatedPlayerList = playerList.map((player) => {
                if (player._id == playerId){
                    return res.data
                }
                return player
            })
            setPlayerList(updatedPlayerList)
        })
        .catch(err => console.log(err))
    }
    return(
        <tr>
            <td>{player.name}</td>
            <td>
                <label><input type='radio' value='Playing' name={`status${player._id}`} checked = {gameStatus === 'Playing'} onChange={(e) => updateStatus(e, player._id)}></input>Playing</label>
                <label><input type='radio' value='Not Playing'name={`status${player._id}`} checked = {gameStatus === 'Not Playing'}onChange={(e) => updateStatus(e, player._id)}></input>Not Playing</label>
                <label><input type='radio' value='Undecided' name={`status${player._id}`}checked = {gameStatus === 'Undecided'} onChange={(e) => updateStatus(e, player._id)}></input>Undecided</label>
            </td>
        </tr>
    )
}

export default PlayerStatus;