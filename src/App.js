import React from 'react';
import './assets/App.css';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import Home from "./containers/Home";

function App() {
  return (
    <div className="container-fluid">
        <header className="App-header">
            <NavBar/>
        </header>
        <div className="row">
            <Home greeting="El sitio se encuentra en construccion, pronto estara disponible."/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
