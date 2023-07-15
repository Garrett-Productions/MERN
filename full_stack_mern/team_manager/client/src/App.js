import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect} from 'react'
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import Games from './components/Games'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import axios from 'axios'


function App() {

  useEffect(()=> {
    axios.get("http://localhost:8000/api/players")
    .then((res) => {
      console.log("data of res here", res.data)
      setPlayerList(res.data)
    })
    .catch(err=> console.log(err))
  }, [])

  const [playerList, setPlayerList] = useState([]);
  const [errors, setErrors] = useState([]);

  const removeFromDom = playerId => {
        setPlayerList(playerList.filter(player => player._id !== playerId));
    }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/players/list'element={<PlayerList playerList={playerList}setPlayerList={setPlayerList}  removeFromDom ={removeFromDom} />} />
          <Route path='/players/addplayer'element={<AddPlayer playerList={playerList}setPlayerList={setPlayerList} errors={errors} setErrors={setErrors}/>} />
          <Route path='/status/game/:num' element={<Games playerList={playerList}setPlayerList={setPlayerList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
