import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import LocalWeather from './components/LocalWeather'
import DisplayAll from './components/DisplayAll'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <NavBar />
      <Main />
      <LocalWeather />
      <DisplayAll />
      <Footer />
    </>
  )
}

export default App
