import logo from './logo.svg';
import React from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  } 

  return (
    <div className="App">
         <Navbar 
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode} 
          />
         <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
