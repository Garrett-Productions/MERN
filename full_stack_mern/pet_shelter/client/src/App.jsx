import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import EditOne from './components/EditOne';
import CreateOne from './components/CreateOne';

function App() {
  const [petList, setPetList] = useState([]);

    const removeFromDom = petId => {
      setPetList(petList.filter(pet => pet._id !== petId)); // filter method in app.jsx to pass data back to children
    }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<DisplayAll petList = {petList} setPetList={setPetList} /> }/>
          <Route path='/pets/new' element={<CreateOne petList = {petList} setPetList={setPetList}/> }/>
          <Route path='/pets/:id' element={<DisplayOne removeFromDom={removeFromDom}/>}/>
          <Route path='/pet/:id' element={<EditOne petList = {petList} setPetList={setPetList}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
