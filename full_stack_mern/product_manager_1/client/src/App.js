import './App.css';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import ProductUpdate from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/products' default /> 
          <Route element={<OneProduct/>} path='/products/:id'/>
          <Route element={<ProductUpdate/>} path='/products/edit/:id'/>
        {/* <ProductForm /> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
