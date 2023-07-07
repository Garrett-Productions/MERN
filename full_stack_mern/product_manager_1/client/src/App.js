import './App.css';
import React, {useState} from 'react';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import OneProduct from './components/OneProduct';
// import ProductForm from './components/ProductForm';

function App() {
//adding the default in our initial path makes it the default path
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/products' default /> 
          <Route element={<OneProduct/>} path='/products/:id'/>
        {/* <ProductForm /> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
