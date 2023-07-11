import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import AuthorForm from './components/AuthorForm';
import DisplayAll from './components/DisplayAll';
import UpdateAuthors from './components/UpdateAuthors';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {

  const [authorList, setAuthorlist]= useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorForm authorList={authorList} setAuthorlist={setAuthorlist}/>} path='/authors'/>
          <Route element={<DisplayAll authorList={authorList} setAuthorlist={setAuthorlist}/>}path='/'/>
          <Route element={<UpdateAuthors authorList={authorList} setAuthorlist={setAuthorlist}/>} path='/authors/:id'/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
