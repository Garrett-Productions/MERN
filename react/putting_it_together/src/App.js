import './App.css';
import PersonCard from './components/Person';


function App() {
  return (
    <div className="App">
      <>
      <PersonCard 
        firstName = {"Garrett"} 
        lastName = {"Turner"} 
        age = {29} 
        hairColor = {"Brown"} 
        />
      <PersonCard 
        firstName = {"Charisma"} 
        lastName = {"Kogle"} 
        age = {23} 
        hairColor = {"Brownish"} 
        />
      <PersonCard 
        firstName = {"Matt"} 
        lastName = {"Wehner"} 
        age = {29} 
        hairColor = {"Brown"} 
        />
      <PersonCard 
        firstName = {"Jay"} 
        lastName = {"Patel"} 
        age = {30} 
        hairColor = {"Black"} 
        />
      </>
    </div>
  );
}

export default App;
