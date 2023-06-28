import './App.css';
import Home from './components/Home';
import Params from './components/Params';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// for all the variables we are passing into our paths, those are going to be like props
// so we need to deconstruct those but instead of setting them equal to props we're useParams() instead
// when deconstructing

// if you are on this path, then render this componet( whatever component you pass in to element)
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path='/home'/> 
        <Route element={<Params/>} path='/:wordOrNum'/>
        <Route element={<Params />} path='/:wordOrNum/:fontColor/:backgroundCcolor'/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
