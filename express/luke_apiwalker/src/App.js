import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route, link} from 'react-router-dom';
import { useState } from 'react';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';


function App() {
  const [peepOrPlan, setPeepOrPlan] = useState("");
  const [id, setID] = useState("");
  const [hasError, hasSetError] = useState([]);


  return (
    <>
    <h1 style={{textAlign:'center'}}>Welcome to my Star Wars API!</h1>
    <BrowserRouter>
      <Routes>
        <Route element={<Form peepOrPlan={peepOrPlan} setPeepOrPlan={setPeepOrPlan} id={id} setID={setID}/>} path='/' />
        <Route element={<People id={id} setID={setID} peepOrPlan={peepOrPlan} setPeepOrPlan={setPeepOrPlan}/>} path='/people/:id' />
        <Route element={<Planets id={id} setID={setID} peepOrPlan={peepOrPlan} setPeepOrPlan={setPeepOrPlan}/>} path='/planets/:id' />
        <Route element={<Error hasError={hasError} hasSetError={hasSetError}/>} path='/error/:err' />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
