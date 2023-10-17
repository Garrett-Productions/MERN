import React, { useState } from 'react';
import Form from './components/Form'
import DisplayAll from './components/DisplayAll'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [productList, setProductList] = useState([])
  // const [errors, setErrors] = useState=([])
  // handle delete function here potentially 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form productList={productList} setProductList={setProductList} />}/>
        <Route path='/dashboard' element={<DisplayAll productList={productList} setProductList={setProductList} />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
