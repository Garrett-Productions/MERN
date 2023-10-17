import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import CreateOne from './components/CreateOne';
import EditOne from './components/EditOne';
import ViewOne from './components/ViewOne';
import './App.css'


function App() {
  const [movieList, setMovieList] = useState([])

  const deleteMovie = movieId => {
    setMovieList(movieList.filter(movie => movie._id !== movieId));
  }

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/movies' element = {<DisplayAll movieList={movieList} setMovieList={setMovieList}/> } />
        <Route path='/movies/new' element={<CreateOne movieList={movieList} setMovieList={setMovieList} /> } />
        <Route path='/movies/:id' element={<ViewOne movieList={movieList} setMovieList={setMovieList} deleteMovie={deleteMovie} /> } />
        <Route path='/movies/:id/review' element={<EditOne movieList={movieList} setMovieList={setMovieList} />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
