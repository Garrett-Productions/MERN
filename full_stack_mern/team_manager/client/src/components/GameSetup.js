import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const GameSetup = (props) => {
    const [gameSeries, setGameSeries] = useState([])
    const [currentGame, setCurrentGame] = useState(0);
    const [gameContent, setGamecontent] = useState("")



    return (
        <div>
            <h2 className = "mt-5 fs-3">
                <Link to={"/status/game/1"} className ="text-secondary">Game One | </Link> 
                <Link to={"/status/game/2"} className = "text-secondary">Game Two | </Link> 
                <Link to={"/status/game/3"} className = "text-secondary">Game Three</Link> 
            </h2>
        </div>
    )
}

export default GameSetup;
