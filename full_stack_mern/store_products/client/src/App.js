import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import DisplayAll from '../src/components/DisplayAll'
import AddStore from '../src/components/AddStore'
import ViewOne from '../src/components/ViewOne'
import EditOne from './components/EditOne';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {

  const [storeList, setStoreList]  = useState([]);
  const [name, setName] =useState('');
  const [number, setNumber] =useState(0);
  const [errors, setErrors] = useState([])
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DisplayAll storeList={storeList} setStoreList={setStoreList} name={name} setName={setName} number={number} setNumber={setNumber} open={open} setOpen={setOpen}/>} />
        <Route path='/stores/add' element={<AddStore name={name} setName={setName} number={number} setNumber={setNumber} storeList={storeList} setStoreList={setStoreList} errors={errors} setErrors={setErrors} open={open} setOpen={setOpen}/>}/>
        <Route path='/stores/:id' element={<ViewOne name={name} setName={setName} number={number} setNumber={setNumber} storeList={storeList} setStoreList={setStoreList} errors={errors} setErrors={setErrors} open={open} setOpen={setOpen}/>}/>
        <Route path='/stores/edit/:id' element={<EditOne name={name} setName={setName} number={number} setNumber={setNumber} storeList={storeList} setStoreList={setStoreList} errors={errors} setErrors={setErrors} open={open} setOpen={setOpen}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
