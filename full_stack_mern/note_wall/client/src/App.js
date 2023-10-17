import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import CreateOne from './components/CreateOne';
import DisplayAll from './components/DisplayAll';
import EditOne from './components/EditOne';
// import RandomNote from './components/RandomNote'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import axios from 'axios'

function App() {

    useEffect(() => {
      axios.get('http://localhost:8000/api/notes')
      .then((res) => {
        console.log("Res data here", res.data)
        setNoteList(res.data)
      })
      .catch(err => console.log(err))
    }, [])
  
    const [noteList, setNoteList] = useState([])
    const [errors, setErrors] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<DisplayAll noteList={noteList} setNoteList={setNoteList}/>} />
        <Route path='/notes/new' element={<CreateOne noteList={noteList} setNoteList={setNoteList} errors = {errors} setErrors={setErrors}/> }/>
        <Route path='/notes/:id' element={<EditOne noteList={noteList} setNoteList={setNoteList} errors = {errors} setErrors={setErrors} />} />
        {/* <Route path='/notes/random' element={<RandomNote noteList={noteList} setNoteList={setNoteList}/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
