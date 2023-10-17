import NavBar from './components/NavBar'
import Main from './components/Main'
import LocalWeather from './components/LocalWeather'
import DisplayAll from './components/DisplayAll'
import Footer from './components/Footer'


function App() {
// refactoring to full stack
  return (
    <>
      <NavBar />
      <Main />
      <DisplayAll />
      <LocalWeather />
      <Footer />
    </>
  )
}

export default App
