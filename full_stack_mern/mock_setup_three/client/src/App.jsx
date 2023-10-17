import React, { useState } from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Form from './components/Form';
// import DisplayAll from './components/DisplayAll';


function App() {

  const [productList, setProductList] = useState([])
// const [errors, setErrors] = useState =([])
  // Remove function here to pass states up and down with updated values
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form productList={productList} setProductList={setProductList}/>} />
        {/* <Route path='/dashboard' element={<DisplayAll productList={productList} setProductList={setProductList}/>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
