import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import DisplayAll from './components/DisplayAll';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {

  const [mockList, setMockList] = useState([])
  const [errors, setErrors] = useState([])

  // const removeMock = MockId => {
  //   setMockList(mockList.filter(Mock => Mock._id !== MockId));
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Form mockList={mockList} setMockList={setMockList} errors={errors} setErrors={setErrors} />} path='/'/>
          <Route element={<DisplayAll mockList={mockList} setMockList={setMockList} />}path='/mock'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
