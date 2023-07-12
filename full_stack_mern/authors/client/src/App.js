import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import AuthorForm from './components/AuthorForm';
import DisplayAll from './components/DisplayAll';
import UpdateAuthors from './components/UpdateAuthors';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {

  const [authorList, setAuthorList]= useState([]);
  const [errors, setErrors] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorForm authorList={authorList} setAuthorList={setAuthorList} errors={errors} setErrors={setErrors} />} path='/authors'/>
          <Route element={<DisplayAll authorList={authorList} setAuthorList={setAuthorList}/>}path='/'/>
          <Route element={<UpdateAuthors authorList={authorList} setAuthorList={setAuthorList} errors={errors} setErrors={setErrors} />} path='/authors/:id'/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
  