import React from 'react';
import logo from './logo.svg';
import './assets/App.css';
import NavBar from './components/navBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo Muebles - Sitio en Construcción.
        </p>
        <a
          className="App-link"
          href="https://github.com/LisandroLuna"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Lisandro Luna - CoderHouse ReactJs
        </a>
      </header>
    </div>
  );
}

export default App;
